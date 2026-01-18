from rest_framework import serializers
from .models import BoardMember
from .models import ManagementTeam


class BoardMemberSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    
    class Meta:
        model = BoardMember
        fields =[ "id", "name","title", "description", "image", "role", ]
        
    def get_image(self, obj):
        request=self.context.get("request")
        return request.build_absolute_uri(obj.image.url)

class ManagementTeamSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    
    class Meta:
        model= ManagementTeam
        fields =[ "id", "name","title", "description", "image", "role", ]
        
    def get_image(self, obj):
        request=self.context.get("request")
        return request.build_absolute_uri(obj.image.url)