# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Slider
from .serializers import HeroSectionSerializer

class HeroSectionAPI(APIView):
    def get(self, request):
        hero = Slider.objects.prefetch_related("images").first()  # assuming only one hero section
        serializer = HeroSectionSerializer(hero)
        return Response(serializer.data)
