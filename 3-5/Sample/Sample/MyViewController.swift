//
//  MyViewController.swift
//  Sample
//
//  Created by 吳政賢 on 2017/6/5.
//  Copyright © 2017年 吳政賢. All rights reserved.
//

import UIKit

class MyViewController: UIViewController {
    
    var str: String? = nil;
    
    @IBOutlet weak var label: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        if let str = str {
//            print (str);
            label.text = str;
        }
        
        
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
