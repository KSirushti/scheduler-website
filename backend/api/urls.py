from django.urls import path
from .views import TaskUploadView
from .views import MoodLogView

urlpatterns = [
    path('upload/', TaskUploadView.as_view()),
path('mood/', MoodLogView.as_view()),
]
