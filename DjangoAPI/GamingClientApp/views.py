from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse, HttpResponse
from GamingClientApp.models import GameInfo, CartInfo, AdminInfo
from GamingClientApp.serializers import GameInfoSerializer, CartInfoSerializer, AdminInfoSerializer
from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def gameingClientApi(request, id = 0):
    # GET Method
    if request.method == 'GET':
        if id:
            game = GameInfo.objects.get(GameId = id)
            game_serializer = GameInfoSerializer(game)
            return JsonResponse(game_serializer.data, safe=False)
        else:
            game = GameInfo.objects.all()
            game_serializer = GameInfoSerializer(game, many = True)
            return JsonResponse(game_serializer.data, safe=False)
        

    # POST Method
    elif request.method == 'POST':
        game_data = JSONParser().parse(request)
        game_serializer = GameInfoSerializer(data=game_data)
        if game_serializer.is_valid():
            game_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    
    # PUT Method
    elif request.method == 'PUT':
        game_data = JSONParser().parse(request)
        game = GameInfo.objects.get(GameId = game_data['GameId'])
        game_serializer = GameInfoSerializer(game, game_data)
        if game_serializer.is_valid():
            game_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    
    # DELETE Method
    elif request.method == 'DELETE':
        game = GameInfo.objects.get(GameId = id)
        game.delete()
        return JsonResponse("Deleted Successfully",safe=False)
    

@csrf_exempt
def cartItemApi(request, id = 0):
    # # GET Method
    # if request.method == 'GET':
    #     cart = CartInfo.objects.all()
    #     cart_serializer = CartInfoSerializer(cart, many = True)
    #     return JsonResponse(cart_serializer.data, safe=False)

    # POST Method
    if request.method == 'POST':
        cart_data = JSONParser().parse(request)
        cart_serializer = CartInfoSerializer(data=cart_data)
        if cart_serializer.is_valid():
            cart_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    
    # PUT Method
    elif request.method == 'PUT':
        cart_data = JSONParser().parse(request)
        cart = CartInfo.objects.get(CartId = cart_data['CartId'])
        cart_serializer = CartInfoSerializer(cart, cart_data)
        if cart_serializer.is_valid():
            cart_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    
    # DELETE Method
    elif request.method == 'DELETE':
        cart = CartInfo.objects.get(CartId = id)
        cart.delete()
        return JsonResponse("Deleted Successfully",safe=False)
    
@csrf_exempt
def cartItems(request, email):
    if request.method == 'GET':
        try:
            cart = CartInfo.objects.filter(User = email)
            if cart:
                cart_serializer = CartInfoSerializer(cart, many = True)
                return JsonResponse(cart_serializer.data, safe=False)
            else:
                return JsonResponse({'error': 'User not found'}, status=404)

        except CartInfo.DoesNotExist:
            return JsonResponse({'error': 'CartInfo not found'}, status=404)

@csrf_exempt
def adminInfo(request, email):
    if request.method == 'GET':
        try:
            admin = AdminInfo.objects.filter(AdminEmail = email)
            if admin:
                # admin_serializer = AdminInfoSerializer(admin, many = True)
                # return JsonResponse(admin_serializer.data, safe=False)
                return JsonResponse(True, safe=False)
            else:
                return JsonResponse(False, safe=False)

        except AdminInfo.DoesNotExist:
            return JsonResponse(False, safe=False)
        
    # POST Method
    # elif request.method == 'POST':
    #     admin_data = JSONParser().parse(request)
    #     admin_serializer = AdminInfoSerializer(data=admin_data)
    #     if admin_serializer.is_valid():
    #         admin_serializer.save()
    #         return JsonResponse("Added Successfully",safe=False)
    #     return JsonResponse("Failed to Add",safe=False)