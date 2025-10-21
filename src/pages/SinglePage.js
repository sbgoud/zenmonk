import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SinglePage = () => {
  const [progress, setProgress] = useState(0);
  const [userGoal, setUserGoal] = useState('');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleQuizAnswer = (question, answer) => {
    setQuizAnswers({ ...quizAnswers, [question]: answer });
    if (!badges.includes('Quiz Master')) {
      setBadges([...badges, 'Quiz Master']);
    }
  };

  const addBadge = (badge) => {
    if (!badges.includes(badge)) {
      setBadges([...badges, badge]);
    }
  };

  const timelineData = [
    { phase: 'The Awakening', description: 'He had a smart guy, a successful career, but he had one problem. He couldn\'t stick to any habit for more than 2 weeks. Gym, he\'d stop after 2 months. Meditation. One week and that was it. Reading. He\'d buy a book, read three pages, and then forget it in the drawer. The pattern was always the same. Monday, total motivation. Wednesday, first mental negotiation. Friday, complete surrender. Sunday, promises about the next week.' },
    { phase: 'The Secret of the Monks', description: 'Raphael tried everything. Habit tracking apps, rewards, accountability partners. Nothing worked because he was fighting something he couldn\'t even imagine. The very architecture of his brain. Until the day he discovered why Zen monks can meditate for 800 years straight without missing a single day. And no, it\'s not willpower. It\'s something much deeper and much more frightening.' },
    { phase: 'The Internal War', description: 'Even with all this social pressure, Raphael was still waging war every single day. His body didn\'t care about his reputation. He wanted to sleep when he was tired. The public declaration ended the mental negotiation, but he still fought biology every morning. That\'s when he discovered the monk\'s second principle, non-negotiable hours.' },
    { phase: 'The One Way', description: 'Every day, you waste mental energy on the same stupid question. When will I do this? Now or after breakfast, in the morning or at night? This decision burns up glucose in your brain that should be used for actual practice? You\'re wasting your fuel deciding when to drive instead of actually driving. Raphael chose 5:00 a.m. Not because he was a morning person who loved watching the sunrise. He chose 5:00 a.m. because the world was asleep. No messages, no emails, no distractions, no excuses.' },
    { phase: 'Practice Without Gap', description: 'The first week was hell. Your body fought against it every morning. That\'s normal. Your body is a machine that works with patterns, and you\'re forcing it to build a new pattern. It resists. In the second week, something changed. He started waking up 2 minutes before his alarm. His body had begun preparing for what now awaited him. On the 14th, the alarm rang and his feet touched the floor before his conscious mind even engaged. No thought, no decision, just movement.' },
    { phase: 'Pre-Solutions', description: 'Your child gets sick. Your car breaks down on the way to the gym. Your boss keeps you late. These are consistency killers because you haven\'t predecided how to handle them. Every time an unexpected obstacle appears, you have to make a decision under stress. That decision in that moment of chaos is where you\'ll choose the path of least resistance every time. The obstacle wins because you\'re fighting a battle you didn\'t prepare for.' },
    { phase: 'The Transformation', description: 'On the 90th, he completed his personal ango. 3 months of uninterrupted practice. But something deeper had happened. He was no longer the same person. Friends literally told him, "Your consistency is scary." His response was perfect. Great. Because when your discipline makes others uncomfortable, you\'re finally operating at the right level. Your existence proves that everything they say is impossible is actually just uncomfortable.' },
  ];

  const principles = [
    {
      title: 'Public Declaration',
      description: 'That\'s exactly what Raphael did. He stopped making private promises and started making public declarations. He wrote on paper, "I am a person who meditates 20 minutes every day at 5:00 a.m. for 90 consecutive days." He signed it. He posted it on social media. He told everyone. His girlfriend said, "You\'re being too dramatic." His co-workers said, "Man, you\'re trying too hard." Perfect. Every person he knew became fuel. Every morning he wanted to give up. He thought about having to look everyone in the face and admit he was just another guy who couldn\'t deliver on his promises.',
      icon: '📢',
    },
    {
      title: 'Fixed Schedule',
      description: 'Every day, you waste mental energy on the same stupid question. When will I do this? Now or after breakfast, in the morning or at night? This decision burns up glucose in your brain that should be used for actual practice? You\'re wasting your fuel deciding when to drive instead of actually driving. Raphael chose 5:00 a.m. Not because he was a morning person who loved watching the sunrise. He chose 5:00 a.m. because the world was asleep. No messages, no emails, no distractions, no excuses. The time wasn\'t about optimization. It was about elimination. Eliminating every possible reason to do it later.',
      icon: '⏰',
    },
    {
      title: 'Identical Practice',
      description: 'You think variety keeps things interesting, but variety is actually where consistency dies. Every time you change what you\'re doing, your brain has to make micro decisions. Should I do push-ups or burpees today? Which book should I read? How long should I meditate? Every small decision is a crack where your old patterns leak back in. Raphael completely locked everything down. 20 push-ups, 10 minutes of meditation, 10 minutes of reading. Same order, same timer, same thing. His personal ango period, 90 days of identical practice.',
      icon: '🔄',
    },
    {
      title: 'Pre-Solved Obstacles',
      description: 'Zen monasteries have operated for centuries without missing a single day of practice. Earthquakes, wars, famines, the practice continues. How? They don\'t make decisions when obstacles arise. The answer already exists. When the meditation hall floods, they go to the dining hall. When the dining hall catches fire, they sit in the courtyard. There is no meeting, no discussion, no negotiation. The bell rings. The response is automatic. Raphael wrote down every obstacle that had ever broken his consistency and pre-solved each one.',
      icon: '🛡️',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-x-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-md p-1">
        <div className="w-full bg-gray-700 rounded-full h-1.5 mb-1">
          <motion.div
            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-1.5 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <div className="container mx-auto flex justify-between items-center text-xs text-gray-400 px-2">
          <div>{Math.round(progress)}%</div>
          <div>🏆 {badges.length}</div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16 pb-8">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-3 py-4">
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 leading-tight"
          >
            Unlock Unbreakable Discipline
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-2xl lg:text-3xl mb-6 max-w-3xl mx-auto leading-relaxed"
          >
            There's a level of discipline that makes people look at you with fear. And today you'll discover exactly how to get there. Have you ever seen that person who never fails? Who wakes up every day at the same time, does the same things, and just never stops? While everyone else gives up by the third week, they keep going. While everyone else makes excuses, they show up. And you know what people say about them? Man, that's not normal.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm sm:text-base md:text-xl lg:text-2xl mb-6 max-w-4xl mx-auto leading-relaxed"
          >
            There's an ancient system created by Zen monks in Japan that produces exactly this kind of frightening consistency. They call it Gyoji, the practice that perpetuates itself. And once you understand how it works, you'll never break a goal again. But there's a catch. This system isn't for everyone. It requires you to kill a part of yourself you never knew existed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-6 px-2"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">What's Your Goal?</h3>
            <input
              type="text"
              value={userGoal}
              onChange={(e) => setUserGoal(e.target.value)}
              placeholder="e.g., Exercise daily, Read books, Learn a skill..."
              className="p-3 rounded-lg bg-gray-800 text-white mb-3 w-full text-sm md:text-base"
            />
            {userGoal && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-yellow-500 text-gray-900 p-3 rounded-lg mb-3 text-sm md:text-base"
              >
                Great! You're committing to: "{userGoal}". Let's make it unbreakable!
              </motion.div>
            )}
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 font-bold py-3 px-6 rounded-full text-lg md:text-xl transition duration-300 shadow-lg mx-auto block"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Journey
          </motion.button>
        </div>
      </section>

      {/* About Gyoji Section */}
      <section id="about" className="min-h-screen flex items-center py-8 px-3">
        <div className="container mx-auto px-2">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 leading-tight"
          >
            The Secret of the Monks
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed"
          >
            <p className="mb-6">
              In Zen temples, there's a rule that seems simple but changes everything. Gyoji. Literally translated, it means continuous practice without gaps. Without gaps. Do you understand what that means? It means that since 1200 AD, every single day at 3:30 a.m. a bell rings at Eiheiji Temple. And since 1200 AD, every single day, the monks wake up. Not at 3:25 a.m., not at 3:35 a.m., exactly at 3:30 a.m.
            </p>
            <p className="mb-6">
              You want to know what never happens in that temple? No monk lies in bed thinking, "Today I'm going to skip." The question simply doesn't exist in their minds. Why? Because they understand something you don't yet. Your brain categorizes every commitment into two boxes, reversible or irreversible. Reversible commitments become mental negotiations. Irreversible commitments simply happen.
            </p>
            <p className="mb-6">
              When a monk takes his vows in front of the entire community, he's not making a promise. He's changing his identity. He's not promising to try to meditate. He's declaring himself a meditator. The community witnesses it. The identity changes. The negotiation ends.
            </p>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">Key Insights from Neuroscience:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
                <li>A Harvard University neuroscientist who has been studying habits for 15 years has discovered something revolutionary.</li>
                <li>When you make a behavior public, your primitive brain interprets failure as a survival threat.</li>
                <li>Our ancestors who lost status in the tribe died. Your brain still works that way.</li>
                <li>Public declarations turn commitments into irreversible actions.</li>
              </ul>
            </div>
          </motion.div>

          {/* Quiz Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800 p-3 rounded-lg shadow-lg mt-4"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">Quick Quiz: Test Your Understanding</h3>
            <p className="mb-3 text-sm sm:text-base md:text-lg">What makes Gyoji different from regular habits?</p>
            <div className="space-y-1">
              {['It\'s just willpower', 'It turns commitments into irreversible actions', 'It\'s about perfection', 'It requires no effort'].map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    handleQuizAnswer('gyoji-difference', option);
                    if (option === 'It turns commitments into irreversible actions') {
                      addBadge('Gyoji Expert');
                    }
                  }}
                  className={`block w-full text-left p-2 rounded text-xs sm:text-sm ${
                    quizAnswers['gyoji-difference'] === option
                      ? option === 'It turns commitments into irreversible actions'
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {option}
                </motion.button>
              ))}
            </div>
            {quizAnswers['gyoji-difference'] && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 p-3 rounded bg-yellow-500 text-gray-900 text-sm md:text-base"
              >
                {quizAnswers['gyoji-difference'] === 'It turns commitments into irreversible actions'
                  ? 'Correct! You earned the "Gyoji Expert" badge!'
                  : 'Not quite. The correct answer is: It turns commitments into irreversible actions.'}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Raphael's Story Section */}
      <section id="story" className="min-h-screen flex items-center py-8 px-3">
        <div className="container mx-auto px-2">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-500 leading-tight"
          >
            Raphael's Journey
          </motion.h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-yellow-400 transform sm:-translate-x-1/2"></div>
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`flex items-center mb-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-full ${index % 2 === 0 ? 'pr-8 sm:pr-12' : 'pl-8 sm:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-lg shadow-lg cursor-pointer transition duration-300 bg-gray-800 hover:bg-gray-700 relative"
                    onClick={() => addBadge(`Phase ${index + 1} Master`)}
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-xl sm:text-2xl mr-2">🏆</span>
                      <h3 className="text-base sm:text-lg font-semibold">{item.phase}</h3>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed">{item.description}</p>
                    {badges.includes(`Phase ${index + 1} Master`) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="mt-2 text-yellow-400 font-semibold text-xs"
                      >
                        Badge Earned! 🎉
                      </motion.div>
                    )}
                    {/* Timeline dot positioned absolutely */}
                    <div className={`absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} hidden sm:block`}>
                      <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-gray-900"></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className="min-h-screen flex items-center py-8 px-3">
        <div className="container mx-auto px-2">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 leading-tight"
          >
            The 4 Principles of Gyoji
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-4 sm:p-5 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl mb-3">{principle.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">{principle.title}</h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section id="practice" className="min-h-screen flex items-center py-8 px-3">
        <div className="container mx-auto px-2">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 leading-tight"
          >
            Practice Without Gap
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed mb-6"
          >
            <p className="mb-6">
              The all or nothing lie has killed more consistency than laziness ever could. You tell yourself, "If I can\'t do the full 20 minutes, why do anything? If I can\'t do perfect push-ups, I\'ll wait until tomorrow." This thinking creates gaps. And gaps are where your old self crawls back in.
            </p>
            <p className="mb-6">
              Look at any elite athlete and you\'ll see something people misinterpret. They have rest days, but those rest days are still progress. They\'re intentional, strategic, planned. Never because they feel lazy, never because they don\'t want to train. A rest day allows them to train harder tomorrow. This is still movement toward the goal.
            </p>
            <p className="mb-6">
              But when you skip because you\'re tired, that\'s not rest. It\'s retreat. A river never stops flowing. During a drought, it may be a trickle, but it never stops. The moment it stops, it\'s no longer a river. It\'s a memory of where the water used to be. Your practice is the same. The moment you create a gap, you\'re no longer practicing. You\'re someone who used to practice.
            </p>
          </motion.div>
          <div className="max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Make Your Public Declaration</h3>
              <textarea
                placeholder="I am a person who [your habit] every day at [time] for [duration]."
                className="w-full p-2 rounded bg-gray-700 text-white mb-3 h-24 text-sm"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full text-sm">
                Declare Publicly
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Set Your Fixed Schedule</h3>
              <input type="time" className="p-2 rounded bg-gray-700 text-white mb-3 w-full text-sm" />
              <p className="text-sm sm:text-base">Commit to the same time every day to build unbreakable habits.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Pre-Solve Your Obstacles</h3>
              <textarea
                placeholder="Plan for rain: Push-ups in the garage. Guests staying home: Silent workout in the bathroom. Hangover: Two push-ups, one minute of meditation, one page of reading."
                className="w-full p-2 rounded bg-gray-700 text-white mb-3 h-24 text-sm"
              />
              <p className="text-sm sm:text-base">When X happens, I do Y. No thinking, no negotiating, just execution.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="min-h-screen flex items-center py-8 px-3">
        <div className="container mx-auto px-2">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 leading-tight"
          >
            The Transformation
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-4"
          >
            <p className="mb-6">
              Here's what most people don't understand about consistency. It's not about willpower lasting forever. It's about repetition until willpower is no longer needed. Your body learns the sequence like a dancer learns choreography. An MIT researcher who has studied the automatization of behaviors for 12 years explains, "When you repeat an action in the same context for approximately 66 days, the basil ganglia of the brain take over. The behavior becomes automatic. You are no longer deciding to do it. You are simply doing it."
            </p>
            <p className="mb-6">
              On the 35th, Raphael caught the flu. On the 40th, he was traveling for work. This is where the old pattern kicks in. Sick day, e rest day, travel, e exception. This is where you gave up before, where everyone gives up because perfect practice requires perfect conditions and perfect conditions do not exist.
            </p>
            <p className="mb-6">
              But Dogen understood something about gaps that changes everything. He wrote that practice must continue without even a moment of gap because in that gap all your old patterns return. What saved Raphael when everything went wrong was understanding that practice doesn't require perfection. It requires continuity.
            </p>
            <p className="mb-6">
              Travel day arrived on day 40. Airport at 4:00 a.m. Meetings all day. No gym at the hotel. Raphael did push-ups in the airport bathroom. People looked at him like he'd lost his mind. Great. He meditated in the Uber. He read on the plane. Nothing was perfect. Everything maintained momentum toward the same goal he declared 90 days ago. This is Guyoji. Practice continuing itself.
            </p>
            <p className="mb-6">
              That's when people started to notice. Co-workers said he seemed different. Friends said he was becoming obsessive. Someone actually said his discipline wasn't healthy. That normal people don't act like that. When you hear these words, you know you're on the right track. Normal people get normal results. You're not trying to be normal. You're trying to be unbreakable.
            </p>
            <p className="mb-6">
              But here's what no one prepares you for. The unexpected obstacles you never saw coming. The things you can't plan for because you don't know they exist. Your child gets sick. Your car breaks down on the way to the gym. Your boss keeps you late. These are consistency killers because you haven't predecided how to handle them.
            </p>
            <p className="mb-6">
              The power of this isn't just maintaining the sequence. It's that you stop wasting mental energy on decisions. Your brain knows that no matter what happens tomorrow, the practice continues. This certainty changes your entire nervous system. A Yale University behavioral psychologist who has been studying decision-m for 20 years found when you predecide your actions, you remove decision fatigue from the critical moment.
            </p>
            <p className="mb-6">
              Day 70. Raphael's practice had become completely automatic. He would sometimes wake up not even remembering doing the push-ups. His body simply moved through the sequence like a programmed machine. His girlfriend's mother visited for a week. He did push-ups in the bathroom at 5:00 a.m. The practice continued because the answers were already written.
            </p>
            <p className="mb-6">
              On the 90th, he completed his personal ango. 3 months of uninterrupted practice. But something deeper had happened. He was no longer the same person. Friends literally told him, "Your consistency is scary." His response was perfect. Great.
            </p>
            <p className="mb-6">
              Because when your discipline makes others uncomfortable, you're finally operating at the right level. Your existence proves that everything they say is impossible is actually just uncomfortable. That's why they'll call you obsessive. That's why they'll say you need balance. They need you to slow down so they can feel better. About standing still. But you're not doing it for them. You're doing it because you've discovered the secret.
            </p>
            <p className="mb-6">
              Consistency isn't about doing something every day. It's about becoming someone who can't do it any other way. When you implement the guoji system, public declaration, fixed schedule, a seamless practice method, and pre-resolved answers. You're not just creating habits, you're reshaping your identity. You stop being someone who tries and become someone who simply is.
            </p>
            <p className="mb-6">
              And when that happens, when that transformation is complete, people will look at you and think, "How does he do that?" And the answer will be simple. He doesn't. He is. The question remains, are you ready for this level of transformation? Because it's not about discipline. It's about death and rebirth. The death of your inconsistent self. the birth of your unbreakable self.
            </p>
          </motion.div>
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight"
            >
              The goji system won't make you a better person. It'll make you a different person. Someone others will look at and think that's not normal. And when you hear those words, you'll know you've finally gotten where you want to be.
            </motion.h3>

            {/* Challenge Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6 max-w-xl mx-auto"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Your 30-Day Challenge</h3>
              <p className="mb-4 text-base sm:text-lg md:text-xl">Commit to a 30-day Gyoji practice starting today!</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-sm"
                  onClick={() => addBadge('30-Day Challenger')}
                >
                  Accept Challenge
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg text-sm"
                  onClick={() => addBadge('Maybe Next Time')}
                >
                  Maybe Later
                </motion.button>
              </div>
              {badges.includes('30-Day Challenger') && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-3 p-2 rounded bg-green-500 text-white text-sm"
                >
                  Challenge Accepted! You earned the "30-Day Challenger" badge! 🚀
                </motion.div>
              )}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 font-bold py-4 px-8 rounded-full text-xl md:text-2xl transition duration-300 shadow-lg"
            >
              Start Your Gyoji Journey
            </motion.button>

            {/* Badges Display */}
            {badges.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Your Badges:</h3>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  {badges.map((badge, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-yellow-500 text-gray-900 px-4 py-3 rounded-lg font-semibold text-base md:text-lg"
                    >
                      {badge}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;