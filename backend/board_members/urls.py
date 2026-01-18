from django.urls import path
from .views import BoardOfDirectorsAPIView
from .views import ManagementTeamAPIView
urlpatterns = [
    path("board-of-directors/",  BoardOfDirectorsAPIView.as_view()),
    path("management-team/",  ManagementTeamAPIView.as_view())
]
