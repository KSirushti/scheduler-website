from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def root_view(request):
    return JsonResponse({"status": "Scheduler API is live ✅"})

urlpatterns = [
    path('', root_view),  # This is why "/" works
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),  # assumes you have api/urls.py
]
