from rest_framework import generics
from .models import Task, MoodLog
from .serializers import TaskSerializer, MoodLogSerializer

class TaskListCreateView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class MoodLogCreateView(generics.CreateAPIView):
    queryset = MoodLog.objects.all()
    serializer_class = MoodLogSerializer
