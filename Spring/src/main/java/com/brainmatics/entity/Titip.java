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
import javax.persistence.Table;
import javax.persistence.ManyToOne;

/**
 *
 * @author PC06
 */
@Entity
@Table(name = "titip")
public class Titip implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int kode_titip;
    @Column(length = 255, nullable = false)
    private String jenisHewan;
    private String status;
    private String jenisJasa;
    @ManyToOne
    private Member member;
    
    public int getKodeTitip() {
        return kode_titip;
    }

    /**
     * @param id the kode_titip to set
     */
    public void setKodeTitip(int kode_titip) {
        this.kode_titip = kode_titip;
    }

    /**
     * @return the jenisHewan
     */
    public String getJenisHewan() {
        return jenisHewan;
    }

    /**
     * @param jenisHewan the jenisHewan to set
     */
    public void setJenisHewan(String jenisHewan) {
        this.jenisHewan = jenisHewan;
    }

    /**
     * @return the description
     */
    public String getStatus() {
        return status;
    }

    /**
     * @param status the description to set
     */
    public void setStatus(String status) {
        this.status = status;
    }
    public String getJenisJasa() {
        return jenisJasa;
    }

    /**
     * @param status the description to set
     */
    public void setJenisJasa(String JenisJasa) {
        this.jenisJasa = JenisJasa;
    }
    
    public Member getMember(){
        return member;
    }
    
    public void setMember(Member member){
        this.member = member;
    }
}
