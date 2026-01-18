from rest_framework.views import APIView
from rest_framework.response import Response
from .models import News
from .serializers import NewsSerializer

# Create your views here.

class NewsAPIView(APIView):
    def get(self, request):
        members =News.objects.filter(is_active=True)
        serializer=NewsSerializer(
            members, many=True, context={"request": request}
        )
        return Response(serializer.data)