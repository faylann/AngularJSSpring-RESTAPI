/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.service;

import com.brainmatics.entity.Titip;
import com.brainmatics.repo.TitipRepo;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author PC06
 */
@Service("titipService")
@Transactional
public class TitipService {
    
    @Autowired
    private TitipRepo repo;

    public Titip insert(Titip titip) {
        return repo.save(titip);
    }
    
    public Titip update(Titip titip) {
        return repo.save(titip);
    }
    
    public boolean delete(int kode_titip){
        repo.delete(kode_titip);
        return true;
    }
    
    public Titip getById(int kode_titip){
        return repo.findOne(kode_titip);
    }
    
    public List<Titip> getAll(){
        return repo.findAllTitip();
    }
}
