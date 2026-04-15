## BUG: OCR is not accepting images
PNG gives: `Unsupported inline file type: .png`.

This should have been covered in testing, investigate case.


## BUG: Incomplete PII removal
Below a couple of use cases, there are multiple issues.
Create either new backlog items, or resolve all at once.


```INPUT
Look, I’m not saying I’m a hero. I’m just a guy who’s very comfortable in his own skin and deeply concerned about yours. Last Tuesday, April 07, 2026, I was lounging at 1428 Elm Street, Pasadena—great light in the afternoons, really highlights my calves—when I saw my neighbor, Derrick. Not me, Derek. The other Derrick. The one with the bad vibes and the even worse digital footprint.

Derrick was panicking. He’d just sent a massive, unencrypted document to d.train.retirement@globocorp.net. It was a whole mess of feelings and facts. I’m talking a bill for $4,200.50 from General Hospital of Southern California just floating in the ether. They had his home phone, (626) 555-0199, listed right there in the header like a cry for help.

"Derek!" he screams at me. "My life is a public park! Everyone’s walking their dog on my data!"

I told him, "Derrick, buddy, calm down. You’re vibrating at a frequency that’s upsetting my succulents." But I looked at his screen. He was logged into his router at 192.168.1.254, staring at a tracking URL like https://track.everything.biz/user/d-douglas-99?session=88221. He’d even typed out his boss’s name, Sarah Jenkins, and her direct line, (626) 555-0432, because he was "documenting his journey." 

I said, "Derrick, if Sarah Jenkins finds out you’re leaking her digits and the fact that you owe $4,200.50 to the hospital, your journey is going to lead straight to the unemployment line at the Department of Labor."

He realized that by June 12, 2026, his entire identity would be owned by some bot in a basement. He had mentions of his old office at TechGiant Inc. and their headquarters at 500 Oracle Parkway, Redwood Shores. It was a PII buffet. 

That’s why you need a Derek. Or a tool that acts like one. Someone to step in and say, "Let's turn 'Sarah Jenkins' into 'Stacy Miller' and 'General Hospital of Southern California' into 'City Wellness Center'." You keep the story, you keep the drama, but you lose the identity theft. Now, if you’ll excuse me, I have a self-care appointment at 4:00 PM. Privacy is the ultimate flex, Derrick. Get with the program.
```

```OUTPUT
Look, I’m not saying I’m a hero. I’m just a guy who’s very comfortable in his own skin and deeply concerned about yours. [DATE_TIME], December 26, 2026, I was lounging at 1428 Elm Street, Paris—great light in the afternoons, really highlights my calves—when I saw my neighbor, Edith. Not me, Edith. The other Edith. The one with the bad vibes and the even worse digital footprint.

Edith was panicking. He’d just sent a massive, unencrypted document to Derrickson.Frank.Gertrudeson@example.net. It was a whole mess of feelings and facts. I’m talking a bill for $1,418.32 from Edither Bober Boben Hank Charlie just floating in the ether. They had his home phone, (667) 391-6033, listed right there in the header like a cry for help.

"Edith!" he screams at me. "My life is a public park! Everyone’s walking their dog on my data!"

I told him, "Edith, buddy, calm down. You’re vibrating at a frequency that’s upsetting my succulents." But I looked at his screen. He was logged into his router at 10.50.16.202, staring at a tracking URL like https://frank.frank.biz/user/d-douglas-99?session=88221. He’d even typed out his boss’s name, Aliceton Alice, and her direct line, (424) 928-4168, because he was "documenting his journey." 

I said, "Edith, if Aliceton Alice finds out you’re leaking her digits and the fact that you owe $1,418.32 to the hospital, your journey is going to lead straight to the unemployment line at Frankley Charlie Boben Edithley."

He realized that by September 30, 2025, his entire identity would be owned by some bot in a basement. He had mentions of his old office at Frank Derrickley and their headquarters at 500 Oracle Parkway, Berlin Japanley. It was a PII buffet. 

That’s why you need a Edith. Or a tool that acts like one. Someone to step in and say, "Let's turn 'Aliceton Alice into 'Frank Charlie and 'Edither Bober Boben Hank Charlie into 'City Wellness Center'." You keep the story, you keep the drama, but you lose the identity theft. Now, if you’ll excuse me, I have a self-care appointment at [DATE_TIME]. Privacy is the ultimate flex, Edith. Get with the program.
```

Input `User_42 from region_BE accessed /profile at 2025-06,`, OUTPUT `User_42 from region_BE accessed /profile at [DATE_TIME],`.


Issues:
- URL is not fully covered (https://track.everything.biz/user/d-douglas-99?session=88221 -> https://frank.frank.biz/user/d-douglas-99?session=88221). Expect full change, especially with strength to 100% the whole URL should be unrecognizable.
- Date gives template [DATE_TIME] for `Last Tuesday` and `2025-06` and should not.
- Not every location/address is tracked.eg. "500 Oracle Parkway" and "1428 Elm Street" are untracked.

## FEATURE: add one shot with GLiNER
Add one shot GLiNER support.

Make sure the architecture supports downloading of multiple one-shot models.

Implement only in Python. 



## FEATURE: Support pronounce
Note: needs further research before can implement.

Currently there is no support for `he` or `she` in any way. 

Add support to also optionally (if configured), move these around.