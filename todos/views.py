from rest_framework import generics, permissions, filters
from mywedding.permissions import IsOwnerOrReadOnly
from .models import Todo
from .serializers import TodoSerializer
from django_filters.rest_framework import DjangoFilterBackend

class TodoList(generics.ListCreateAPIView):
    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    queryset = Todo.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
        DjangoFilterBackend,
    ]

    filterset_fields = [
        #user posts
        'owner__profile',
    ]

class TodoDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a post and edit or delete it if you own it.
    """
    serializer_class = TodoSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Todo.objects.all()