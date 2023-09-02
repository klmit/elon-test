from django.shortcuts import render
from rest_framework.views import APIView, status
from .models import Ratings
from .serializer import RatingValuesSerializer
from rest_framework.response import Response
# Create your views here.


class RatingValueView(APIView):
    def get(self, request):
        output = [
            {
                "uniqueid": output.uniqueid,
                "value": output.value,
            } for output in Ratings.objects.all()
        ]

        return Response(output)

    def put(self, request):
        uniqueid = Ratings.objects.get(
            uniqueid=request.data['uniqueid'])

        serializer = RatingValuesSerializer(uniqueid, data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
