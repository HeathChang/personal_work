//
//  ViewController.swift
//  QuoteGenerator
//
//  Created by Hyunsoo Chang on 2023/09/20.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var quoteLabel: UILabel!
    @IBOutlet weak var nameLabel: UILabel!
    
    let quotes = [
        Quote(id: 0, contents: "사느냐 죽느냐 그것이 문제로다", name: "세익스피어"),
        Quote(id: 1, contents: "나는 아직 배고프다", name: "히딩크"),
        Quote(id: 2, contents: "신은 죽었다", name: "니체"),
        Quote(id: 3, contents: "주사위는 이미 던져졌다", name: "카이사르"),
        Quote(id: 4, contents: "주사위는 이미 던져졌다", name: "카이사르"),
   
    ]

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBAction func tabQuoteGenerator(_ sender: Any) {
        let random = Int(arc4random_uniform(5))
        let quote = quotes[random]
        self.quoteLabel.text = quote.contents
        self.nameLabel.text = quote.name
    }
    
}

