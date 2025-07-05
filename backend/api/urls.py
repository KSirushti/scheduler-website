from django.urls import path
from .views import TaskUploadView

urlpatterns = [
    path('upload/', TaskUploadView.as_view()),
]
