/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.entity;

import java.io.Serializable;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author PC06
 */
@Entity
@Table(name = "member")
public class Member implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_member;
    @Column(length = 100, nullable = true)
    private int nik;
    @Column(length = 100, nullable = true)
    private String nama;
    @Column(length = 255, nullable = true)
    private String no_hp;
    @Column(length = 255, nullable = true)
    private String alamat;
    
    public int getid_member() {
        return id_member;
    }

    public void setid_member (int id_member) {
        this.id_member = id_member;
    }
    
    public int getNik() {
        return nik;
    }

    public void setNik(int nik) {
        this.nik = nik;
    }

    /**
     * @return the name
     */
    public String getNama() {
        return nama;
    }

    /**
     * @param nama the name to set
     */
    public void setNama(String nama) {
        this.nama = nama;
    }
    
    /**
     * @return the name
     */
    public String getNoHp() {
        return no_hp;
    }

    /**
     * @param name the name to set
     */
    public void setNoHp(String no_hp) {
        this.no_hp = no_hp;
    }

    /**
     * @return the description
     */
    public String getAlamat() {
        return alamat;
    }

    /**
     * @param alamat the description to set
     */
    public void setAlamat(String alamat) {
        this.alamat = alamat;
    }

    /**
     * @return the name
     */
}
