from rest_framework import serializers
from .models import Ratings


class RatingValuesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ratings
        fields = ['uniqueid', 'value']
