//
//  ViewController.swift
//  Sample
//
//  Created by 吳政賢 on 2017/6/5.
//  Copyright © 2017年 吳政賢. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        
        if segue.identifier == "VC_TO_MYVC" {
            let vc = segue.destination as! MyViewController
            vc.str = "Hello"
        }
    }
    
//    override func unwind(for unwindSegue: UIStoryboardSegue) {
//        if unwindSegue
//    }
    @IBAction func unwind(for unwindSegue: UIStoryboardSegue) {
        if unwindSegue.identifier == "UNVC_TO_MYVC" {
            let vc = unwindSegue.source as! MyViewController

            if let str = vc.str {
                print(str);
            }
        }
    }

}

