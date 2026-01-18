from rest_framework import serializers
from .models import News

class NewsSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    
    class Meta:
        model=News
        fields=[
            "id",
            "title",
            "description",
            "date",
            'category',
            'image',
            'url',
        ]
    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None