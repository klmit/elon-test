# Generated by Django 4.2.4 on 2023-09-02 08:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('restapi', '0003_remove_ratingvalues_title_ratingvalues_uniqueid_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='RatingValues',
            new_name='Ratings',
        ),
    ]
