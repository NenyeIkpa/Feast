package com.example.feast.common;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ApiResponse <T> {
    private String message;
    private HttpStatus status;
    private T data;
    private Integer statusCode;

    public ApiResponse(T data, String message) {
        this.data = data;
        this.status = HttpStatus.OK;
        this.statusCode = HttpStatus.OK.value();
        this.message = message;
    }
    public ApiResponse(String message) {
        this.status = HttpStatus.OK;
        this.statusCode = HttpStatus.OK.value();
        this.message = message;
    }
}
