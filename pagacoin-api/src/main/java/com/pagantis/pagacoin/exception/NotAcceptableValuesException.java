package com.pagantis.pagacoin.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_ACCEPTABLE)
public class NotAcceptableValuesException extends RuntimeException {

    public NotAcceptableValuesException(String message) {
        super(message);
    }
}
