from django.db import models

# Create your models here.
class GameInfo(models.Model):
    GameId = models.AutoField(primary_key=True)
    GameName = models.CharField(max_length=500)
    GameImage = models.URLField(blank=True, null=True)
    GameRating = models.FloatField(blank=True,null=True)
    GamePrice = models.IntegerField(blank=True, null=True)

class CartInfo(models.Model):
    CartId = models.AutoField(primary_key=True)
    User = models.CharField(max_length=500, null=True)
    GameId = models.IntegerField(blank=True, null=True)
    GameName = models.CharField(max_length=500)
    GameImage = models.URLField(blank=True, null=True)
    GameRating = models.FloatField(blank=True,null=True)
    GamePrice = models.IntegerField(blank=True, null=True)

class AdminInfo(models.Model):
    AdminId = models.AutoField(primary_key=True)
    AdminEmail = models.CharField(max_length=500)


