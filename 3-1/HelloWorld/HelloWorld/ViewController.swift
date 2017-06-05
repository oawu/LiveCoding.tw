//
//  ViewController.swift
//  HelloWorld
//
//  Created by 吳政賢 on 2017/6/5.
//  Copyright © 2017年 吳政賢. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var label: UILabel!
    
    
    @IBAction func onClick(_ sender: Any) {
        label.text = "Hello World."
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

