from django.db import models

# Create your models here.
class News(models.Model):
    CATEGORY_CHOICES = [
        ('Investment', 'Investment'),
        ('Energy', 'Energy'),
        ('Funds', 'Funds'),
        ('Others', 'Others'),
    ]
    title = models.CharField(max_length=200)
    description=models.TextField()
    date=models.DateField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    image=models.ImageField(upload_to="news/")
    url = models.URLField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    
    def __str__(self):
        return self.title

