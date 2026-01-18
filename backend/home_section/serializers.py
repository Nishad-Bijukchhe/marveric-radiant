# serializers.py
from rest_framework import serializers
from .models import Slider, SliderImage

class SliderImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SliderImage
        fields = ["id", "image"]

class  HeroSectionSerializer(serializers.ModelSerializer):
    images = SliderImageSerializer(many=True, read_only=True)

    class Meta:
        model = Slider
        fields = ["heading", "paragraph", "images"]


