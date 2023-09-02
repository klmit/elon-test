from django.db import models

# Create your models here.


class Ratings(models.Model):
    uniqueid = models.CharField(blank=True, max_length=100,
                                default='', db_index=True, unique=True)
    value = models.CharField(blank=True, max_length=100,
                             default='', db_index=True)
