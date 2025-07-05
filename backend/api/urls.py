from django.urls import path
from .views import TaskUploadView
from .views import MoodLogView

urlpatterns = [
    path('upload/', TaskUploadView.as_view()),  # POST to /api/upload/
    path('mood/', MoodLogView.as_view(), name='mood-log'),
]
