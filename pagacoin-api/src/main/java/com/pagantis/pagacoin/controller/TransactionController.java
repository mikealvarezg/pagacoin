package com.pagantis.pagacoin.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import com.pagantis.pagacoin.model.api.TransactionApi;
import com.pagantis.pagacoin.model.api.UserApi;
import com.pagantis.pagacoin.service.TransactionService;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping("/transactions")
    @ApiResponses({ //
            @ApiResponse(code = HttpServletResponse.SC_OK, message = "OK", response = TransactionApi[].class),
            @ApiResponse(code = HttpServletResponse.SC_UNAUTHORIZED, message = "UNAUTHORIZED"),
            @ApiResponse(code = HttpServletResponse.SC_FORBIDDEN, message = "FORBIDDEN"),
            @ApiResponse(code = HttpServletResponse.SC_NOT_FOUND, message = "NOT FOUND"),
    })
    @ApiOperation(value = "Get the application list of transactions")
    public List<TransactionApi> getTransactions() {
        return transactionService.getTransactions();
    }

    @PostMapping("/transactions")
    @ApiResponses({ //
            @ApiResponse(code = HttpServletResponse.SC_OK, message = "OK"),
            @ApiResponse(code = HttpServletResponse.SC_CREATED, message = "CREATED"),
            @ApiResponse(code = HttpServletResponse.SC_UNAUTHORIZED, message = "UNAUTHORIZED"),
            @ApiResponse(code = HttpServletResponse.SC_FORBIDDEN, message = "FORBIDDEN"),
            @ApiResponse(code = HttpServletResponse.SC_NOT_FOUND, message = "NOT FOUND"),
    })
    @ApiOperation(value = "Creates a transaction")
    public ResponseEntity<Object> createTransaction(@ApiParam(value = "Transaction" , name = "transaction", required = true) @Valid @RequestBody TransactionApi transactionApi) {
        return transactionService.createTransaction(transactionApi);
    }
}
