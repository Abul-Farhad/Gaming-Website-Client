from rest_framework import serializers
from GamingClientApp.models import GameInfo, CartInfo, AdminInfo
class GameInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameInfo
        fields = ('GameId', 'GameName', 'GameImage', 'GameRating', 'GamePrice')

class CartInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartInfo
        fields = ('CartId','User','GameId', 'GameName', 'GameImage', 'GameRating', 'GamePrice')


class AdminInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminInfo
        fields = ('AdminId', 'AdminEmail')