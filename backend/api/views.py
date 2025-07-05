from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser

from .models import Task, MoodLog
from .serializers import TaskSerializer, MoodLogSerializer

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from django.http import JsonResponse

def ping(request):
    return JsonResponse({"status": "ok"})
# Task View
@method_decorator(csrf_exempt, name='dispatch')
class TaskListCreateView(APIView):
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


# Mood Log View (for form submission)
@method_decorator(csrf_exempt, name='dispatch')
class MoodLogListCreateView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request):
        moods = MoodLog.objects.all().order_by('-created_at')
        serializer = MoodLogSerializer(moods, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MoodLogSerializer(data=request.data)
        if serializer.is_valid():
            mood_entry = serializer.save()
            return Response({
                "message": "Mood log created successfully",
                "file": mood_entry.file.url if mood_entry.file else None
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
