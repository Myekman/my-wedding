from django.db import models
from django.contrib.auth.models import User

class Todo(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    completed = models.BooleanField(null=False,default=False)


    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.content}'
