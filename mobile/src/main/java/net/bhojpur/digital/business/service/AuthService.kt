package net.bhojpur.digital.business.service

// Copyright (c) 2018 Bhojpur Consulting Private Limited, India. All rights reserved.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import android.content.Context
import android.util.Log
import net.bhojpur.digital.business.GrpcService
import net.bhojpur.digital.business.users.AuthServiceGrpc
import net.bhojpur.digital.business.users.LoginRequest
import net.bhojpur.digital.business.users.LoginResponse
import java.io.IOException
import java.util.concurrent.TimeUnit

class AuthService(context: Context) {
    private lateinit var stub: AuthServiceGrpc.AuthServiceBlockingStub

    fun login(user: String, password: String): LoginResponse {
        var response : LoginResponse = LoginResponse.newBuilder().build()

        try {
            val chanel = GrpcService().createMangagedChanel()
            stub = AuthServiceGrpc.newBlockingStub(chanel)
            val request =
                LoginRequest.newBuilder().setUsername(user).setPassword(password).build()
            response = stub.login(request)
            chanel.awaitTermination(5, TimeUnit.SECONDS);
            return response
        }
        catch (e : IOException) {
            Log.i("adit :", "io cause exception " + e.cause)
        } catch (e : Exception){
            Log.i("adit :", "cause exception " + e.cause)
        }
        return response
    }
}