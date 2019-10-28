import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hit-counter',
  templateUrl: './hit-counter.component.html',
  styleUrls: ['./hit-counter.component.scss']
})
export class HitCounterComponent implements OnInit {
  human: {};
  toNum = 20;
  fromNum = 1;
  rng: number;
  masteryRng: any;
  formChangesSubscription: any;
  inputAdjustment: any = document.getElementById('input-adjustment');
  message: string;
  masteryMessage: string;
  formObject: {};
  formObjectMastery: {};

  // Phrase Storage
  success = ' Success!';
  miss = ' Miss!';
  oneOff = ' One off, apply to second closest vital (or, if NA) deal 1/2 effect.';
  dealNoDmg = ' Deal no damage or effect unless stated otherwise.';
  hitOnTheMark = ' Hit on the mark, apply to selected Target or vital.';
  hitAtHead = ' Target is "hit" at the head vital.';
  hitAtTorso = ' Target is "hit" at the torso vital.';
  dominantLeg = ' Target is "hit" at the Dominant side Leg vital. (Right leg if NA)';
  nonDominantLeg = ' Target is "hit" at the Non Dominant side Leg vital. (Left leg if NA)';
  dominantArm = ' Target is "hit" at the Dominant arm vital. (Right arm if NA)';
  nonDominantArm = ' Target is "hit" at the Non Dominant arm vital. (Left arm if NA)';
  criticalHit = ' Critical hit!';
  directHit = ' Direct hit!';
  hit = ' Hit!';
  plusD12 = ' Effect plus a D12 "Edge" to selected vehicle component.';
  effectComponent = ' Effect to selected vehicle component';
  effectExterior = ' Effect the exterior of the vehicle for hull damage';
  dealNoDmgVehicle = ' Deal no damage or effect to the vehicle.';

  constructor() { }

  ngOnInit() {
  }

  randomFromTo() {
    return Math.floor(Math.random() * ( this.toNum - this.fromNum + 1) + this.fromNum);

 }

 randomFromToMastery() {
  return Math.floor(Math.random() * ( this.toNum - this.fromNum + 1) + this.fromNum);

}

  // Scroll To Result

  scrollToResult(): void  {
    document.getElementById('message').scrollIntoView({
      behavior: 'smooth'
    });
  }

  // Action Methods

  sureShotRoll()  {
    // window.navigator.vibrate(5);
    this.rng = this.randomFromTo();
    if (this.rng === 1)  {
      this.message = this.miss + this.dealNoDmg;
      this.scrollToResult();
    } else if (this.rng >= 2 && this.rng <= 9)  {
      this.message =  this.success + this.oneOff;
      this.scrollToResult();
    } else if (this.rng >= 10 && this.rng <= 20)  {
      this.message = this.success + this.hitOnTheMark;
      this.scrollToResult();
    } else {
      return;
    }
   }


  masteryHighRoll()  {
    // window.navigator.vibrate(5);
    this.masteryRng = this.randomFromToMastery();
    if (this.masteryRng >= 4 && this.masteryRng <= 20)  {
      this.masteryMessage = this.success + this.hitAtHead;
    } else if (this.masteryRng >= 1 && this.masteryRng <= 3)  {
      this.masteryMessage = this.miss + this.dealNoDmg;
    } else {
      return;
    }
   }


  masteryMidRoll()  {
    // window.navigator.vibrate(5);
    this.masteryRng = this.randomFromToMastery();
    if (this.masteryRng >= 9 && this.masteryRng <= 20)  {
      this.masteryMessage = this.success + this.hitAtTorso;
    } else if (this.masteryRng >= 6 && this.masteryRng <= 8)  {
      this.masteryMessage = this.success + this.dominantArm;
    } else if (this.masteryRng >= 3 && this.masteryRng <= 5)  {
      this.masteryMessage = this.success + this.nonDominantArm;
    } else if (this.masteryRng >= 1 && this.masteryRng <= 2)  {
      this.masteryMessage = this.miss + this.dealNoDmg;
    } else {
      return;
    }
    }

  masteryLowRoll()  {
    // window.navigator.vibrate(5);
    this.masteryRng = this.randomFromToMastery();
    if (this.masteryRng >= 12 && this.masteryRng <= 20)  {
      this.masteryMessage = this.success + this.dominantLeg;
    } else if (this.masteryRng >= 3 && this.masteryRng <= 11)  {
      this.masteryMessage = this.success + this.nonDominantLeg;
    } else if (this.masteryRng >= 1 && this.masteryRng <= 2)  {
      this.masteryMessage = this.miss + this.dealNoDmg;
    } else {
      return;
    }
    }


  trainedRoll()  {
    // window.navigator.vibrate(5);
    this.rng = this.randomFromTo();
    if (this.rng >= 15 && this.rng <= 20)  {
      this.message = this.success + this.hitAtHead;
      this.scrollToResult();
    } else if (this.rng >= 11 && this.rng <= 14)  {
      this.message = this.success + this.hitAtTorso;
      this.scrollToResult();
    } else if (this.rng >= 9 && this.rng <= 10)  {
      this.message = this.success + this.dominantLeg;
      this.scrollToResult();
    } else if (this.rng >= 7 && this.rng <= 8)  {
      this.message = this.success + this.nonDominantLeg;
      this.scrollToResult();
    } else if (this.rng >= 5 && this.rng <= 6)  {
      this.message = this.success + this.dominantArm;
      this.scrollToResult();
    } else if (this.rng >= 3 && this.rng <= 4)  {
      this.message = this.success + this.nonDominantArm;
      this.scrollToResult();
    } else if (this.rng >= 1 && this.rng <= 2)  {
      this.message = this.miss + this.dealNoDmg;
      this.scrollToResult();
    } else {
      return;
    }
   }

   unTrainedRoll()  {
    // window.navigator.vibrate(5);
    this.rng = this.randomFromTo();
    if (this.rng === 20)  {
      this.message = this.success + this.hitAtHead;
      this.scrollToResult();
    } else if (this.rng >= 16 && this.rng <= 19)  {
      this.message = this.success + this.hitAtTorso;
      this.scrollToResult();
    } else if (this.rng >= 13 && this.rng <= 15)  {
      this.message = this.success + this.dominantLeg;
      this.scrollToResult();
    } else if (this.rng >= 10 && this.rng <= 12)  {
      this.message = this.success + this.nonDominantLeg;
      this.scrollToResult();
    } else if (this.rng >= 7 && this.rng <= 9)  {
      this.message = this.success + this.dominantArm;
      this.scrollToResult();
    } else if (this.rng >= 4 && this.rng <= 6)  {
      this.message = this.success + this.nonDominantArm;
      this.scrollToResult();
    } else if (this.rng >= 1 && this.rng <= 3)  {
      this.message = this.miss + this.dealNoDmg;
      this.scrollToResult();
    } else {
      return;
    }
   }

   farShotRoll()  {
    // window.navigator.vibrate(5);
    this.rng = this.randomFromTo();
    if (this.rng === 20)  {
      this.message = this.success + this.hitAtHead;
      this.scrollToResult();
    } else if (this.rng >= 18 && this.rng <= 19)  {
      this.message = this.success + this.hitAtTorso;
      this.scrollToResult();
    } else if (this.rng >= 15 && this.rng <= 16)  {
      this.message = this.success + this.dominantLeg;
      this.scrollToResult();
    } else if (this.rng >= 12 && this.rng <= 14)  {
      this.message = this.success + this.nonDominantLeg;
      this.scrollToResult();
    } else if (this.rng >= 9 && this.rng <= 11)  {
      this.message = this.success + this.dominantArm;
      this.scrollToResult();
    } else if (this.rng >= 6 && this.rng <= 8)  {
      this.message = this.success + this.nonDominantArm;
      this.scrollToResult();
    } else if (this.rng >= 1 && this.rng <= 5)  {
      this.message = this.miss + this.dealNoDmg;
      this.scrollToResult();
    } else {
      return;
    }
   }

   longShotRoll()  {
    // window.navigator.vibrate(5);
    this.rng = this.randomFromTo();
    if (this.rng >= 15 && this.rng <= 20)  {
      this.message = this.success + this.hitAtHead;
      this.scrollToResult();
    } else if (this.rng >= 11 && this.rng <= 14)  {
      this.message = this.success + this.hitAtTorso;
      this.scrollToResult();
    } else if (this.rng >= 9 && this.rng <= 10)  {
      this.message = this.success + this.dominantLeg;
      this.scrollToResult();
    } else if (this.rng >= 7 && this.rng <= 8)  {
      this.message = this.success + this.nonDominantLeg;
      this.scrollToResult();
    } else if (this.rng >= 5 && this.rng <= 6)  {
      this.message = this.success + this.dominantArm;
      this.scrollToResult();
    } else if (this.rng >= 3 && this.rng <= 4)  {
      this.message = this.success + this.nonDominantArm;
      this.scrollToResult();
    } else if (this.rng >= 1 && this.rng <= 2)  {
      this.message = this.miss + this.dealNoDmg;
      this.scrollToResult();
    } else {
      return;
    }
   }

   vehicleRoll()  {
    // window.navigator.vibrate(5);
    this.rng = this.randomFromTo();
    if (this.rng === 20)  {
      this.message = this.criticalHit + this.plusD12;
      this.scrollToResult();
    } else if (this.rng >= 15 && this.rng <= 19)  {
      this.message = this.directHit + this.effectComponent;
      this.scrollToResult();
    } else if (this.rng >= 5 && this.rng <= 14)  {
      this.message = this.hit + this.effectExterior;
      this.scrollToResult();
    } else if (this.rng >= 1 && this.rng <= 4)  {
      this.message = this.miss + this.dealNoDmg;
      this.scrollToResult();
    } else {
      return;
    }
   }

   invertedHCRoll()  {
    // window.navigator.vibrate(5);
    this.rng = this.randomFromTo();
    if (this.rng >= 11 && this.rng <= 20)  {
      this.message = this.miss + ' unintentional target is missed, avoiding damage and effect unless stated otherwise.';
    } else if (this.rng >= 1 && this.rng <= 10)  {
      this.message = this.hit + ' unintentional Target is hit in closest vital.';
      this.scrollToResult();
    } else {
      return;
    }
   }

  //   Template-driven Form

   onSubmit(form: NgForm) {
    this.formObject = form.value;
    this.toNum = this.formObject['to-num'];
    this.fromNum = this.formObject['from-num'];
  }


}
