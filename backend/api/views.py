from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import AllowAny

from .models import Task, MoodLog
from .serializers import TaskSerializer, MoodLogSerializer

from rest_framework.decorators import api_view

@api_view(['GET'])
def ping(request):
    return Response({"message": "pong!"})
    
# Task View
class TaskListCreateView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ✅ Mood View (No csrf_exempt)
class MoodLogListCreateView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [AllowAny]

    def get(self, request):
        moods = MoodLog.objects.all()
        serializer = MoodLogSerializer(moods, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MoodLogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
