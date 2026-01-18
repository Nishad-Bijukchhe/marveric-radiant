from django.contrib import admin
from .models import BoardMember
from .models import ManagementTeam


@admin.register(BoardMember)
class BoardMemberAdmin(admin.ModelAdmin):
    list_display = ("name", "role", "order", "is_active")
    list_filter = ("role", "is_active")
    search_fields = ("name", "title")

@admin.register(ManagementTeam)
class ManagementTeamAdmin(admin.ModelAdmin):
    list_display =("name", "role", "order", "is_active")
    list_filter = ("role", "is_active")
    search_fields = ("name", "title")