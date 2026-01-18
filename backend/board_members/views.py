from rest_framework.views import APIView
from rest_framework.response import Response
from .models import BoardMember
from .models import ManagementTeam
from .serializers import ManagementTeamSerializer
from .serializers import BoardMemberSerializer
# Create your views here.

class BoardOfDirectorsAPIView(APIView):
    def get(self, request):
        members =BoardMember.objects.filter(is_active=True)
        serializer=BoardMemberSerializer(
            members, many=True, context={"request": request}  #Think of it as: “Here’s the raw data from the database; please turn it into API-friendly format.”
        )
        return Response(serializer.data)
    
    
class ManagementTeamAPIView(APIView):
    def get(self, request):
        members =ManagementTeam.objects.filter(is_active=True)
        serializer=ManagementTeamSerializer(
            members, many=True, context={"request": request}
        )
        return Response(serializer.data)