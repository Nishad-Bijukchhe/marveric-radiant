from django.urls import path
from .views import HeroSectionAPI

urlpatterns = [
    path("slider/", HeroSectionAPI.as_view()) #as_view() converts a class-based view into a callable view function.
]
