package com.pagantis.pagacoin.controller;

import com.pagantis.pagacoin.model.api.UserApi;
import com.pagantis.pagacoin.model.entity.Wallet;
import com.pagantis.pagacoin.service.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    @ApiResponses({ //
            @ApiResponse(code = HttpServletResponse.SC_OK, message = "OK", response = UserApi[].class),
            @ApiResponse(code = HttpServletResponse.SC_UNAUTHORIZED, message = "UNAUTHORIZED"),
            @ApiResponse(code = HttpServletResponse.SC_FORBIDDEN, message = "FORBIDDEN"),
            @ApiResponse(code = HttpServletResponse.SC_NOT_FOUND, message = "NOT FOUND"),
    })
    @ApiOperation(value = "Get the application list of users")
    public List<UserApi> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/users/{id}/wallets")
    @ApiResponses({ //
            @ApiResponse(code = HttpServletResponse.SC_OK, message = "OK", response = Wallet[].class),
            @ApiResponse(code = HttpServletResponse.SC_UNAUTHORIZED, message = "UNAUTHORIZED"),
            @ApiResponse(code = HttpServletResponse.SC_FORBIDDEN, message = "FORBIDDEN"),
            @ApiResponse(code = HttpServletResponse.SC_NOT_FOUND, message = "NOT FOUND"),
    })
    @ApiOperation(value = "Get the wallet list of a user")
    public List<Wallet> getWalletsByUser(@ApiParam(value = "User id" , name = "id", required = true) @PathVariable Integer id) {
        return userService.getWalletsByUser(id);
    }

}
