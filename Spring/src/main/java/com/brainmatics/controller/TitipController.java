/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.brainmatics.controller;

import com.brainmatics.entity.Titip;
import com.brainmatics.service.TitipService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author PC06
 */
@RestController
@RequestMapping("/titip")
public class TitipController {
    @Autowired
    private TitipService titipService;
    private int kode_titip;

    @RequestMapping(method = RequestMethod.POST)
    public Titip insert(@RequestBody Titip titip) {
        return titipService.insert(titip);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Titip update(@RequestBody Titip titip) {
        return titipService.update(titip);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{kode_titip}")
    public boolean delete(@PathVariable("kode_titip") int kode_titip) {
        return titipService.delete(kode_titip);
    }
    
    @RequestMapping(method = RequestMethod.GET, value = "/{kode_titip}")
    public Titip getById(@PathVariable("kode_titip") int nik){
        return titipService.getById(kode_titip);
    }
    
    @RequestMapping(method = RequestMethod.GET)
    public List<Titip> getAll(){
        return titipService.getAll();
    }
}
