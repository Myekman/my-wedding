# Generated by Django 3.2.21 on 2023-10-13 13:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0002_alter_todo_options'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='completed',
        ),
        migrations.RemoveField(
            model_name='todo',
            name='title',
        ),
    ]
