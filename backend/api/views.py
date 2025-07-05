from rest_framework.generics import CreateAPIView
from .models import MoodLog
from .serializers import MoodLogSerializer

class MoodLogCreateView(CreateAPIView):
    queryset = MoodLog.objects.all()
    serializer_class = MoodLogSerializer
