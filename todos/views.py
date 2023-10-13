from rest_framework import generics, permissions
from mywedding.permissions import IsOwnerOrReadOnly
from .models import Todo
from .serializers import TodoSerializer

class TodoList(generics.ListCreateAPIView):
    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    queryset = Todo.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

