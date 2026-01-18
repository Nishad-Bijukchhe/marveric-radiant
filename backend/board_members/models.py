from django.db import models

# Create your models here.
class BoardMember (models.Model):
    ROLE_CHOICES =(
        ("executive", "Executive Director"),
        ("member", "Board Member"),
    )
    
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to="board/")
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.name
    
class ManagementTeam(models.Model):
    ROLE_CHOICES=(
        ("senior associate", "Senior Associate"),
         ("member", "Junior Officer"),
    )
    
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to="management/")
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.name