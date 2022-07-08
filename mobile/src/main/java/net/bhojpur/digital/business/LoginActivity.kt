package net.bhojpur.digital.business

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

import android.content.Intent
import android.content.SharedPreferences
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import net.bhojpur.digital.business.service.AuthService
import kotlinx.android.synthetic.main.activity_login.*
import android.widget.Toast
import androidx.appcompat.app.AlertDialog
import com.google.gson.Gson
import net.bhojpur.digital.business.users.LoginResponse

class LoginActivity : AppCompatActivity() {

    private fun formIsValid() : Boolean {
        var username: String = loginUsernameEditText.text.toString()
        var password: String = loginPasswordEditText.text.toString()

        if (username.isEmpty()) {
            loginUsernameEditText.error = "Please supply valid username"
            return false
        }

        if (password.isEmpty()) {
            loginPasswordEditText.error = "Please supply valid password"
            return false
        }

        return true
    }

    private fun failed() {
        val builder = AlertDialog.Builder(this)
        builder.setTitle("Attention")
        builder.setMessage("Invalid username or password. Please supply valid username and password.")
        builder.setNeutralButton("OK") { dialog, which ->
            loginUsernameEditText.setText("")
            loginPasswordEditText.setText("")
        }
        builder.show()
    }

    private fun success(authObj: LoginResponse ){
        Toast.makeText(applicationContext, "Login Success", Toast.LENGTH_SHORT).show()
        val mPrefs: SharedPreferences = getSharedPreferences("MyMode", 0)
        val prefsEditor: SharedPreferences.Editor = mPrefs.edit()
        prefsEditor.putString("authToken", authObj.token)
        prefsEditor.putString("authUserName", authObj.user.name)
        prefsEditor.putString("authUserId", authObj.user.id)
        prefsEditor.putString("authCompanyId", authObj.user.companyId)

        var myObj: Array<String> = emptyArray()
        for (access in authObj.user.group.accessList) {
            myObj = myObj.plus(access.name)
        }
        prefsEditor.putString("authAccess", Gson().toJson(myObj))
        prefsEditor.commit()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        loginButton.setOnClickListener {
           if (formIsValid()) {
               var authObj: LoginResponse =  AuthService(this).login(
                   loginUsernameEditText.text.toString(),
                   loginPasswordEditText.text.toString()
               )

               if (authObj.token.isEmpty()) failed()
               else {
                   success(authObj)
                   val mainIntent = Intent(this, MainActivity::class.java)
                   startActivity(mainIntent)
               }
           }
        }
    }
}