from django.urls import path
from .views import NewsAPIView

urlpatterns = [
    path("news/", NewsAPIView.as_view()) #as_view() converts a class-based view into a callable view function.
]
