package com.pagantis.pagacoin.model.api;

public class UserApi {

    private Integer id;

    String name;

    public UserApi(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
