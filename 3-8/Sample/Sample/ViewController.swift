//
//  ViewController.swift
//  Sample
//
//  Created by 吳政賢 on 2017/6/5.
//  Copyright © 2017年 吳政賢. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBAction func onClick(_ sender: Any) {
        if let vc = storyboard?.instantiateViewController(withIdentifier: "nextVC") as? MyViewController {
//            show(vc, sender: self);
            vc.str = "xxx";
            
            self.present(vc, animated: true, completion: nil)
        }
        
        
        if let firstNumber = Int("0"), let secondNumber = Int("42"), firstNumber < secondNumber && secondNumber < 100 {
            print("\(firstNumber) < \(secondNumber) < 100")
        } else {
            print(" >>> 0");
        }
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

