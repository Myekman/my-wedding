# Generated by Django 3.2.21 on 2023-10-14 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0004_auto_20231014_0748'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='content',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='todo',
            name='title',
            field=models.CharField(max_length=255),
        ),
    ]
