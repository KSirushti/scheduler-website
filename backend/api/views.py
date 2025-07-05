from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from .models import MoodLog
from .serializers import MoodLogSerializer

class MoodLogView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, format=None):
        serializer = MoodLogSerializer(data=request.data)
        if serializer.is_valid():
            mood_log = serializer.save()
            return Response({
                "message": "Mood entry created successfully.",
                "file": mood_log.file.url if mood_log.file else None
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
