/*
 * 自闭谱系特质自测 —— 量表数据
 * ---------------------------------------------------------------
 * 本文件与页面逻辑分离，可独立编辑。数据以 window.ASD_DATA 暴露，
 * 由 index.html 通过 <script src="scales.js"> 引入（无需服务器，双击即可用）。
 *
 * ⚠️ 重要声明：以下均为「筛查量表」，用于反映自闭谱系相关特质的倾向程度，
 *    结果是连续谱系而非二元判定，不能替代精神科/临床的专业诊断。
 *
 * 计分类型 type：
 *   "aq"    —— 选项 [完全同意, 有点同意, 有点不同意, 完全不同意]
 *              k:"agree"    → 选「同意」侧(index 0/1) 记 1 分
 *              k:"disagree" → 选「不同意」侧(index 2/3) 记 1 分
 *   "raads" —— 选项 [现在和小时候都符合, 只有现在符合, 只有16岁前符合, 从不符合]
 *              k:"normal"  → 分数 = 3 - index (3/2/1/0)
 *              k:"reverse" → 分数 = index     (0/1/2/3)
 *   "eq"    —— 选项 [非常同意, 有点同意, 有点不同意, 非常不同意]
 *              k:"forward" → 非常同意=2, 有点同意=1, 其余=0
 *              k:"reverse" → 非常不同意=2, 有点不同意=1, 其余=0
 *              k:"filler"  → 干扰题，恒为 0 分（不计入总分）
 *
 * direction：谱系特质随分数增高("high")还是降低("low")而增强。
 */
window.ASD_DATA = {
  disclaimer:
    "本测试为自闭谱系相关特质的<b>筛查工具</b>，结果呈现为连续谱系上的位置，" +
    "反映的是「特质倾向的强弱」，<b>不是</b>是否患病的二元判断，" +
    "也<b>不能</b>替代精神科医生或临床心理专业人员的诊断。" +
    "若结果或自身困扰让你在意，请携带结果咨询专业机构。",

  versions: [
    { id: "full",  name: "完整版",  desc: "AQ-50 + RAADS-14 + EQ，约 124 题，更全面", scales: ["AQ50", "RAADS14", "EQ"] },
    { id: "short", name: "简版",    desc: "AQ-10 + RAADS-14 + EQ，约 84 题，更快速", scales: ["AQ10", "RAADS14", "EQ"] }
  ],

  scales: {
    /* ============================ AQ-50 ============================ */
    AQ50: {
      id: "AQ50",
      name: "AQ 自闭谱系商数（50 题完整版）",
      nameEn: "Autism-Spectrum Quotient (AQ), 50-item",
      citation: "Baron-Cohen, Wheelwright, Skinner, Martin & Clubley (2001), J Autism Dev Disord 31(1):5-17. © Autism Research Centre, University of Cambridge.",
      instructions: "请凭第一直觉作答，选最接近你实际情况的一项，不必反复斟酌。每题都需作答。",
      type: "aq",
      direction: "high",
      max: 50,
      options: [
        { en: "Definitely Agree", zh: "完全同意" },
        { en: "Slightly Agree", zh: "有点同意" },
        { en: "Slightly Disagree", zh: "有点不同意" },
        { en: "Definitely Disagree", zh: "完全不同意" }
      ],
      norms: { control: 16.4, group: 35.8 },
      thresholds: [
        { value: 26, label: "参考筛查线（≥26 常作为进一步评估的参考）" },
        { value: 32, label: "研究临界值（原始研究中 ≥32 更具区分度）" }
      ],
      subscales: {
        social: { name: "社交技能", max: 10 },
        switching: { name: "注意力转换", max: 10 },
        detail: { name: "细节注意", max: 10 },
        communication: { name: "沟通", max: 10 },
        imagination: { name: "想象力", max: 10 }
      },
      note_general: "AQ 共 5 个维度、各 10 题；总分 0–50，分数越高代表自闭谱系相关特质倾向越明显。",
      items: [
        { n: 1, k: "disagree", s: "social", en: "I prefer to do things with others rather than on my own.", zh: "比起自己一个人做事，我更喜欢和别人一起做。", note: "比如周末想去看展，你是倾向于约上朋友一同前往，还是更愿意自己一个人慢慢逛。" },
        { n: 2, k: "agree", s: "switching", en: "I prefer to do things the same way over and over again.", zh: "我喜欢反复用同样的方式做事。", note: "比如早上起床后，你是习惯每天按固定顺序刷牙、吃饭、出门，还是每天怎么方便怎么来。" },
        { n: 3, k: "disagree", s: "imagination", en: "If I try to imagine something, I find it very easy to create a picture in my mind.", zh: "当我想象某样东西时，我能很轻松地在脑海里勾勒出画面。", note: "比如听到别人描述一片海滩，你脑中能不能立刻浮现出沙子、海浪的具体画面。" },
        { n: 4, k: "agree", s: "switching", en: "I frequently get so strongly absorbed in one thing that I lose sight of other things.", zh: "我经常会全神贯注地投入到一件事里，以至于忽略了周围的其他事情。", note: "比如打游戏或看书入迷时，你是否会没听见别人叫你、忘了时间和吃饭。" },
        { n: 5, k: "agree", s: "detail", en: "I often notice small sounds when others do not.", zh: "别人没注意到的细小声音，我常常能察觉到。", note: "比如在安静的房间里，冰箱的嗡嗡声或时钟的滴答声，有人会留意到，有人则毫无察觉。" },
        { n: 6, k: "agree", s: "detail", en: "I usually notice car number plates or similar strings of information.", zh: "我常会不自觉地记住车牌号或类似的一串串信息。", note: "比如路过停车场，有些人会顺手记下某个车牌或电话号码，有些人则完全不会去注意这些。" },
        { n: 7, k: "agree", s: "communication", en: "Other people frequently tell me that what I've said is impolite, even though I think it is polite.", zh: "我自认为说话很客气，但别人却常说我不礼貌。", note: "这道题问的是：你对自己说话方式的感受，和别人对你的感受，是否有时会对不上。" },
        { n: 8, k: "disagree", s: "imagination", en: "When I'm reading a story, I can easily imagine what the characters might look like.", zh: "读故事的时候，我能轻松想象出书中人物长什么样子。", note: "比如看小说时，你脑海里是否会自动浮现出主角的相貌、身形和穿着。" },
        { n: 9, k: "agree", s: "detail", en: "I am fascinated by dates.", zh: "我对日期特别着迷。", note: "比如有些人会热衷于记各种纪念日、历史事件的具体年月日，有些人则对日期没什么兴趣。" },
        { n: 10, k: "disagree", s: "switching", en: "In a social group, I can easily keep track of several different people's conversations.", zh: "在一群人聚会时，我能轻松地同时留意好几个人的谈话。", note: "比如饭桌上几拨人同时在聊天，你能不能一边听这桌、一边跟上那边的对话内容。" },
        { n: 11, k: "disagree", s: "social", en: "I find social situations easy.", zh: "我觉得应付社交场合对我来说很轻松。", note: "比如参加聚会、和不太熟的人相处时，你是感觉自在从容，还是需要费些心力。" },
        { n: 12, k: "agree", s: "detail", en: "I tend to notice details that others do not.", zh: "我往往会注意到别人没注意到的细节。", note: "比如朋友换了个新发型或桌上多了件小摆设，有些人一眼就发现，有些人则要被提醒才知道。" },
        { n: 13, k: "agree", s: "social", en: "I would rather go to a library than a party.", zh: "比起去参加聚会，我更愿意去图书馆。", note: "这道题问的是：在热闹的社交活动和安静独处的活动之间，你更偏向哪一种。" },
        { n: 14, k: "disagree", s: "imagination", en: "I find making up stories easy.", zh: "编故事对我来说很容易。", note: "比如临时要给孩子讲一个睡前故事，你是能随口就编出情节，还是觉得无从下手。" },
        { n: 15, k: "disagree", s: "social", en: "I find myself drawn more strongly to people than to things.", zh: "相比于事物，我更容易被人所吸引。", note: "这道题问的是：你的注意力和兴趣，是更多被人（相处、交往）吸引，还是更多被物件、系统这类东西吸引。" },
        { n: 16, k: "agree", s: "switching", en: "I tend to have very strong interests, which I get upset about if I can't pursue.", zh: "我往往会有非常强烈的兴趣爱好，如果没法去做，我会感到烦躁。", note: "比如某项爱好对你来说很投入，一旦被打断或没时间做，你的感受如何。" },
        { n: 17, k: "disagree", s: "communication", en: "I enjoy social chit-chat.", zh: "我喜欢闲聊家常。", note: "比如等电梯或排队时和旁人随口聊几句天气、近况，你是觉得挺有意思，还是并不特别享受。" },
        { n: 18, k: "agree", s: "communication", en: "When I talk, it isn't always easy for others to get a word in edgeways.", zh: "我说起话来，别人常常很难插上嘴。", note: "这道题问的是：聊天时你是否会一直说下去，让对方不太有机会开口。" },
        { n: 19, k: "agree", s: "detail", en: "I am fascinated by numbers.", zh: "我对数字特别着迷。", note: "比如有些人喜欢琢磨数字规律、记各种数据，有些人则对数字没什么特别的兴趣。" },
        { n: 20, k: "agree", s: "imagination", en: "When I'm reading a story, I find it difficult to work out the characters' intentions.", zh: "读故事的时候，我很难弄清人物的真实意图。", note: "比如看小说时，你能不能读懂角色话里有话、或行为背后的真正动机。" },
        { n: 21, k: "agree", s: "imagination", en: "I don't particularly enjoy reading fiction.", zh: "我不太喜欢读小说。", note: "这道题问的是：在阅读上，虚构类的小说故事对你有多大吸引力。" },
        { n: 22, k: "agree", s: "social", en: "I find it hard to make new friends.", zh: "我觉得交新朋友是件难事。", note: "比如到了一个新环境，你是很容易就和陌生人熟络起来，还是觉得建立新关系比较吃力。" },
        { n: 23, k: "agree", s: "detail", en: "I notice patterns in things all the time.", zh: "我随时都在留意事物中的规律。", note: "比如看到瓷砖排列、数字序列或日程安排，有些人会自然地去发现其中的规律，有些人不太会往这方面想。" },
        { n: 24, k: "disagree", s: "imagination", en: "I would rather go to the theatre than a museum.", zh: "比起去博物馆，我更愿意去剧院看演出。", note: "这道题只是在两种休闲方式里做个偏好选择：现场演出，还是逛展看藏品。" },
        { n: 25, k: "disagree", s: "switching", en: "It does not upset me if my daily routine is disturbed.", zh: "如果日常的作息被打乱，我并不会因此心烦。", note: "比如原定的计划临时有变、日常作息被打断，你是能坦然接受，还是会觉得不舒服。" },
        { n: 26, k: "agree", s: "communication", en: "I frequently find that I don't know how to keep a conversation going.", zh: "我常常发现自己不知道该怎么把一段对话继续下去。", note: "比如聊天聊到一半冷场了，你是能自然地找到新话题接上，还是会一时语塞不知说什么。" },
        { n: 27, k: "disagree", s: "communication", en: "I find it easy to \"read between the lines\" when someone is talking to me.", zh: "别人跟我说话时，我能轻松地「听出言外之意」。", note: "比如同事说「今天真是够忙的」，这句话背后可能是在暗示需要帮忙或想抱怨。" },
        { n: 28, k: "disagree", s: "detail", en: "I usually concentrate more on the whole picture, rather than the small details.", zh: "我通常更关注整体的大局，而不是细枝末节。", note: "这道题问的是：面对一件事，你的注意力更容易落在总体印象上，还是落在具体的小细节上。" },
        { n: 29, k: "disagree", s: "detail", en: "I am not very good at remembering phone numbers.", zh: "我不太擅长记电话号码。", note: "比如听到一串新的电话号码，你是能比较容易记住，还是转头就忘。" },
        { n: 30, k: "disagree", s: "detail", en: "I don't usually notice small changes in a situation, or a person's appearance.", zh: "我通常不太会注意到情境里的细微变化，或某个人外表上的小变动。", note: "比如朋友剪短了头发或办公室挪动了家具，有些人立刻就察觉，有些人过了很久才发现。" },
        { n: 31, k: "disagree", s: "communication", en: "I know how to tell if someone listening to me is getting bored.", zh: "我能看出正在听我说话的人是不是开始觉得无聊了。", note: "比如你在讲一件事，对方开始看手机或眼神游离，这道题问的是你对这类信号的感知情况。" },
        { n: 32, k: "disagree", s: "switching", en: "I find it easy to do more than one thing at once.", zh: "同时做好几件事，对我来说很容易。", note: "比如一边接电话一边记笔记、还得照看着锅里的菜，你是能应付自如，还是觉得手忙脚乱。" },
        { n: 33, k: "agree", s: "communication", en: "When I talk on the phone, I'm not sure when it's my turn to speak.", zh: "打电话时，我常拿不准什么时候该轮到我说话。", note: "比如通话中没有表情和手势可参考，你把握开口和停顿时机的情况如何。" },
        { n: 34, k: "disagree", s: "switching", en: "I enjoy doing things spontaneously.", zh: "我喜欢做事凭一时兴起、说做就做。", note: "比如突然想去哪儿玩，你是能立刻出发享受这种随性，还是更习惯事先安排好。" },
        { n: 35, k: "agree", s: "communication", en: "I am often the last to understand the point of a joke.", zh: "我常常是最后一个才听懂笑话笑点的人。", note: "比如一群人听完段子都笑了，你是马上明白笑点，还是要愣一下、或需要别人解释才明白。" },
        { n: 36, k: "disagree", s: "social", en: "I find it easy to work out what someone is thinking or feeling just by looking at their face.", zh: "光是看别人的脸，我就能轻松判断出他在想什么、有什么感受。", note: "比如只凭对方的表情，去看他是开心、为难还是不太高兴，这道题问的是你做这件事的情况。" },
        { n: 37, k: "disagree", s: "switching", en: "If there is an interruption, I can switch back to what I was doing very quickly.", zh: "如果被打断了，我能很快切回到原来正在做的事情上。", note: "比如工作时被人来问了几句话，回过头你是能立刻接上刚才的思路，还是要缓一会儿才找回状态。" },
        { n: 38, k: "disagree", s: "communication", en: "I am good at social chit-chat.", zh: "我很擅长闲聊家常。", note: "比如和不太熟的人随意聊天气、聊近况，你是能轻松聊起来，还是觉得没什么好说。" },
        { n: 39, k: "agree", s: "communication", en: "People often tell me that I keep going on and on about the same thing.", zh: "别人常说我总是围着同一件事反复念叨。", note: "这道题问的是：在别人眼中，你是否会反复谈论同一个话题。" },
        { n: 40, k: "disagree", s: "imagination", en: "When I was young, I used to enjoy playing games involving pretending with other children.", zh: "小时候，我很喜欢和其他孩子一起玩过家家之类的假扮游戏。", note: "比如童年时的角色扮演、假装做饭开店这类游戏，回想起来你的感受如何。" },
        { n: 41, k: "agree", s: "imagination", en: "I like to collect information about categories of things (e.g. types of car, types of bird, types of train, types of plant, etc.).", zh: "我喜欢收集关于某类事物的分类信息（比如汽车的种类、鸟的种类、火车的种类、植物的种类等等）。", note: "比如有些人热衷于把某个领域的东西分门别类地整理记录，有些人则没有这种收集分类的兴趣。" },
        { n: 42, k: "agree", s: "imagination", en: "I find it difficult to imagine what it would be like to be someone else.", zh: "我很难想象自己身处别人的处境会是什么感觉。", note: "比如听朋友讲他的遭遇时，去设身处地体会「如果是我会怎样」，这道题问的是你做这件事的情况。" },
        { n: 43, k: "agree", s: "switching", en: "I like to plan any activities I participate in carefully.", zh: "对于要参加的任何活动，我都喜欢仔细地事先计划好。", note: "比如出门旅行，你是喜欢把行程细致安排妥当，还是走到哪算哪。" },
        { n: 44, k: "disagree", s: "social", en: "I enjoy social occasions.", zh: "我喜欢各种社交场合。", note: "比如聚会、饭局、社交活动，你是乐在其中，还是并不怎么期待。" },
        { n: 45, k: "agree", s: "social", en: "I find it difficult to work out people's intentions.", zh: "我很难揣摩出别人的真实意图。", note: "比如别人说了句模棱两可的话或做了个举动，去看出他背后想要什么，这道题问的是你做这件事的情况。" },
        { n: 46, k: "agree", s: "switching", en: "New situations make me anxious.", zh: "陌生的新情境会让我感到焦虑。", note: "比如第一次去一个完全陌生的地方或场合，你是感到兴奋期待，还是会紧张不安。" },
        { n: 47, k: "disagree", s: "social", en: "I enjoy meeting new people.", zh: "我喜欢结识新的人。", note: "比如在活动上认识素不相识的人，你是觉得有趣、乐意去接触，还是宁愿避开。" },
        { n: 48, k: "disagree", s: "social", en: "I am a good diplomat.", zh: "我很擅长处理人际关系、说话得体圆融。", note: "比如两方意见有分歧时，巧妙地措辞、照顾各方感受把话说圆，这道题问的是你做这件事的情况。" },
        { n: 49, k: "disagree", s: "detail", en: "I am not very good at remembering people's date of birth.", zh: "我不太擅长记住别人的生日。", note: "比如亲友的生日日期，你是能比较容易记住，还是常常记不清。" },
        { n: 50, k: "disagree", s: "imagination", en: "I find it very easy to play games with children that involve pretending.", zh: "和孩子玩假扮类的游戏，对我来说非常轻松自在。", note: "比如陪小孩玩过家家、假装自己是某个角色，你是能自然投入，还是觉得放不开、不知怎么演。" }
      ]
    },

    /* ============================ AQ-10 ============================ */
    AQ10: {
      id: "AQ10",
      name: "AQ-10 自闭谱系商数（10 题简版）",
      nameEn: "AQ-10 (Adult)",
      citation: "Allison, Auyeung & Baron-Cohen (2012), J Am Acad Child Adolesc Psychiatry 51(2):202-212；NICE CG142 推荐的成人快速筛查工具。© Autism Research Centre.",
      instructions: "请凭第一直觉作答，选最接近你实际情况的一项。每题都需作答。",
      type: "aq",
      direction: "high",
      max: 10,
      options: [
        { en: "Definitely Agree", zh: "完全同意" },
        { en: "Slightly Agree", zh: "有点同意" },
        { en: "Slightly Disagree", zh: "有点不同意" },
        { en: "Definitely Disagree", zh: "完全不同意" }
      ],
      norms: { control: 2.3, group: 7.0 },
      thresholds: [
        { value: 6, label: "参考线：ARC 原表述为「超过 6 分」（即 ≥7），NICE 实务中常按 ≥6 建议进一步评估" }
      ],
      subscales: {},
      note_general: "AQ-10 是 AQ 的快速筛查版，总分 0–10；用于提示是否需要进一步的完整评估，本身不构成结论。",
      items: [
        { n: 1, k: "agree", en: "I often notice small sounds when others do not", zh: "我常常会注意到一些别人没留意到的细小声音。", note: "比如在安静的屋子里，冰箱的嗡嗡声或时钟的滴答声，有人会听见，有人则完全没察觉。" },
        { n: 2, k: "disagree", en: "I usually concentrate more on the whole picture, rather than the small details", zh: "我通常更关注整体的大局，而不是那些细枝末节。", note: "比如看一幅画时，有的人先感受整体氛围，有的人先注意到角落里的一个小物件；这道题问的是你平时更偏向哪一种。" },
        { n: 3, k: "disagree", en: "I find it easy to do more than one thing at once", zh: "我觉得同时做好几件事对我来说很容易。", note: "比如一边打电话一边做饭、记笔记，这道题问的是你处理这种多头并进的情况时感觉如何。" },
        { n: 4, k: "disagree", en: "If there is an interruption, I can switch back to what I was doing very quickly", zh: "就算中途被打断，我也能很快地回到原来正在做的事情上。", note: "比如你正在写东西时有人来问话，聊完之后，你重新接上刚才思路的过程是顺畅还是需要缓一缓。" },
        { n: 5, k: "disagree", en: "I find it easy to 'read between the lines' when someone is talking to me", zh: "别人跟我说话时，我很容易听出那些没直说的言外之意。", note: "比如同事说「这个方案挺有意思的」，有时字面之外还藏着别的意思，这道题问的是你捕捉这类弦外之音的感受。" },
        { n: 6, k: "disagree", en: "I know how to tell if someone listening to me is getting bored", zh: "我能看出正在听我说话的人是不是已经觉得无聊了。", note: "比如你在跟别人讲一件事，对方开始看手机或眼神飘走，这道题问的是你注意到并判断这种状态的情况。" },
        { n: 7, k: "agree", en: "When I'm reading a story I find it difficult to work out the characters' intentions", zh: "读故事的时候，我很难弄清楚书里人物的真实意图。", note: "比如小说里角色说了一句话或做了一个举动，要去推测他背后到底想干什么，这道题问的是你做这种推断时的感受。" },
        { n: 8, k: "agree", en: "I like to collect information about categories of things (e.g. types of car, types of bird, types of train, types of plant etc)", zh: "我喜欢收集关于某类事物的各种信息（比如各种车型、各种鸟类、各种火车、各种植物等等）。", note: "比如有人热衷于把某一类东西的分类、型号、名称都摸清楚，这道题问的是你对这种系统化收集信息的兴趣。" },
        { n: 9, k: "disagree", en: "I find it easy to work out what someone is thinking or feeling just by looking at their face", zh: "我觉得只要看对方的表情，就能轻松看出他在想什么或有什么感受。", note: "比如只凭一个人脸上的神情，去判断他此刻是开心、担心还是别的，这道题问的是你做这件事时容不容易。" },
        { n: 10, k: "agree", en: "I find it difficult to work out people's intentions", zh: "我觉得很难看出别人真正的意图。", note: "比如别人做了某件事或说了某句话，要去揣摩他到底想达到什么目的，这道题问的是你面对这种情况时的感受。" }
      ]
    },

    /* ============================ RAADS-14 ============================ */
    RAADS14: {
      id: "RAADS14",
      name: "RAADS-14 自闭谱系筛查",
      nameEn: "RAADS-14 Screen",
      citation: "Eriksson, Andersen & Bejerot (2013), Molecular Autism 4:49（RAADS-R 的 14 题精简版）。",
      instructions: "请按「对你而言是否符合」来选择，每题只选一项。选项按「符合的时间段」区分，请如实选择。",
      type: "raads",
      direction: "high",
      max: 42,
      options: [
        { en: "True now and when I was young", zh: "现在和小时候都符合" },
        { en: "True only now", zh: "只有现在符合" },
        { en: "True only when I was younger than 16", zh: "只有 16 岁以前符合" },
        { en: "Never true", zh: "从不符合" }
      ],
      norms: { control: 6.0, group: 27.0 },
      thresholds: [
        { value: 14, label: "参考线：≥14 建议进一步评估（原研究此临界值灵敏度约 0.97）" }
      ],
      subscales: {
        mentalizing: { name: "心智化/社交沟通", max: 21 },
        social: { name: "社交焦虑", max: 12 },
        sensory: { name: "感知反应", max: 9 }
      },
      note_general: "RAADS-14 共 14 题、3 个维度，总分 0–42，分数越高代表相关特质倾向越明显。其中第 6 题为反向计分。",
      items: [
        { n: 1, k: "normal", s: "mentalizing", en: "It is difficult for me to understand how other people are feeling when we are talking", zh: "聊天的时候，我很难体会到对方此刻是什么心情。", note: "比如朋友说话时语气有点低落，有的人会立刻察觉到对方不开心，有的人则要对方明说才反应过来。这道题问的是你判断他人情绪的难易程度。" },
        { n: 2, k: "normal", s: "sensory", en: "Some ordinary textures that do not bother others feel very offensive when they touch my skin", zh: "有些别人觉得很平常的质地，碰到我皮肤时却让我特别难受。", note: "比如毛衣的标签、粗糙的毛巾、某种衣料贴在身上的感觉，有人完全无所谓，有人却觉得刺痒难忍。这道题问的是特定触感对你的影响。" },
        { n: 3, k: "normal", s: "social", en: "It is very difficult for me to work and function in groups", zh: "在团体里一起做事、正常发挥，对我来说非常困难。", note: "比如小组作业或团队项目中一群人协作推进，有人如鱼得水，有人则觉得吃力。这道题问的是你在群体中协作的感受。" },
        { n: 4, k: "normal", s: "mentalizing", en: "It is difficult to figure out what other people expect of me", zh: "我很难搞清楚别人到底对我有什么期待。", note: "比如新到一个岗位，别人没明说该做什么、做到什么程度，这道题问的是你摸清他人期待的难易程度。" },
        { n: 5, k: "normal", s: "social", en: "I often don't know how to act in social situations", zh: "在社交场合，我常常不知道该怎么表现才好。", note: "比如参加一场不太熟的聚会，该说什么、怎么举止合适，有人自然应对，有人会感到无从下手。这道题问的是你在社交情境中的自在程度。" },
        { n: 6, k: "reverse", s: "social", en: "I can chat and make small talk with people", zh: "我能和别人闲聊、寒暄，随口聊上几句。", note: "比如在电梯里或排队时和旁人聊两句天气、随便搭句话，这道题问的是你进行日常闲聊的情况。（此题为反向计分）" },
        { n: 7, k: "normal", s: "sensory", en: "When I feel overwhelmed by my senses, I have to isolate myself to shut them down", zh: "当各种感官刺激让我招架不住时，我必须找个地方独处，把它们隔绝掉。", note: "比如在嘈杂拥挤的商场待久了，有人需要躲到安静角落缓一缓，有人则不太受影响。这道题问的是感官超载时你的应对方式。" },
        { n: 8, k: "normal", s: "social", en: "How to make friends and socialize is a mystery to me", zh: "怎么交朋友、怎么与人来往，对我来说始终是个谜。", note: "比如从认识一个人到成为朋友的这个过程，有人觉得顺其自然，有人则摸不着门道。这道题问的是你对建立社交关系的感受。" },
        { n: 9, k: "normal", s: "mentalizing", en: "When talking to someone, I have a hard time telling when it is my turn to talk or to listen", zh: "和人说话时，我很难把握什么时候该我开口、什么时候该听对方说。", note: "比如聊天中轮流发言的节奏，有人自然而然地接话，有人则拿捏不准何时插话、何时倾听。这道题问的是你对对话节奏的把握。" },
        { n: 10, k: "normal", s: "sensory", en: "Sometimes I have to cover my ears to block out painful noises (like vacuum cleaners or people talking too much or too loudly)", zh: "有时我得捂住耳朵，才能挡住那些让我难受的噪音（比如吸尘器声，或者旁人说话太多、太吵）。", note: "比如吸尘器的轰鸣、周围人的大声喧哗，有人觉得普通，有人则觉得刺耳到需要遮挡。这道题问的是某些声音对你的影响。" },
        { n: 11, k: "normal", s: "mentalizing", en: "It can be very hard to read someone's face, hand, and body movements when we are talking", zh: "说话的时候，我常常很难读懂对方的表情、手势和肢体动作。", note: "比如对方皱眉、摊手或身体前倾，有人能从中读出言外之意，有人则主要靠对方说出来的话。这道题问的是你解读肢体语言的情况。" },
        { n: 12, k: "normal", s: "mentalizing", en: "I focus on details rather than the overall idea", zh: "比起整体的大方向，我更容易把注意力放在细节上。", note: "比如读一篇文章或看一个方案，有人先抓总体思路，有人先注意到具体的字句和细节。这道题问的是你关注信息时的侧重点。" },
        { n: 13, k: "normal", s: "mentalizing", en: "I take things too literally, so I often miss what people are trying to say", zh: "我常常把话理解得太字面，结果没听出对方真正想表达的意思。", note: "比如别人说「改天一起吃饭吧」，有人理解为客套，有人则当成真要约时间。这道题问的是你理解言外之意的方式。" },
        { n: 14, k: "normal", s: "mentalizing", en: "I get extremely upset when the way I like to do things is suddenly changed", zh: "当我习惯的做事方式突然被打乱时，我会非常烦躁不安。", note: "比如原定的计划或熟悉的流程被临时更改，有人能顺势调整，有人则会感到明显的不适。这道题问的是变动对你情绪的影响。" }
      ]
    },

    /* ============================ EQ ============================ */
    EQ: {
      id: "EQ",
      name: "EQ 共情商数（60 题）",
      nameEn: "Empathy Quotient (EQ)",
      citation: "Baron-Cohen & Wheelwright (2004), J Autism Dev Disord 34(2):163-175；干扰题划分参考 Lawrence et al. (2004)。© Autism Research Centre.",
      instructions: "请凭第一直觉作答，选最接近你实际情况的一项。每题都需作答。其中部分为不计分的对照题。",
      type: "eq",
      direction: "low",
      max: 80,
      options: [
        { en: "Strongly Agree", zh: "非常同意" },
        { en: "Slightly Agree", zh: "有点同意" },
        { en: "Slightly Disagree", zh: "有点不同意" },
        { en: "Strongly Disagree", zh: "非常不同意" }
      ],
      norms: { control: 44.0, group: 20.0 },
      thresholds: [
        { value: 30, label: "参考线：≤30 与谱系相关（原研究中约 81% 的谱系成人得分 ≤30）" }
      ],
      bands: [
        { min: 0, max: 32, label: "偏低" },
        { min: 33, max: 52, label: "一般（人群平均约 42–47）" },
        { min: 53, max: 63, label: "偏高" },
        { min: 64, max: 80, label: "很高" }
      ],
      subscales: {},
      note_general: "EQ 衡量共情能力，总分 0–80（40 道计分题 + 20 道对照题）。与其他量表相反：EQ 分数越低，才提示越多的谱系相关特质。",
      items: [
        { n: 1, k: "forward", en: "I can easily tell if someone else wants to enter a conversation.", zh: "我能轻松看出别人是不是想加入一段对话。", note: "比如几个人正聊着天，旁边有人凑过来，想插句话进来。这里问的是你对这种情形的实际体会。" },
        { n: 2, k: "filler", en: "I prefer animals to humans.", zh: "比起人，我更喜欢动物。", note: "在「和人相处」与「和猫狗等动物相处」之间，你更倾向于哪一种带来的感觉。" },
        { n: 3, k: "filler", en: "I try to keep up with the current trends and fashions.", zh: "我会努力跟上当下的潮流和时尚。", note: "比如流行什么样的穿搭、什么热门话题，你会不会主动去关注和跟进。" },
        { n: 4, k: "reverse", en: "I find it difficult to explain to others things that I understand easily, when they don't understand it the first time.", zh: "要是别人第一次没听懂，我很难把自己觉得很简单的事再讲明白。", note: "比如你觉得某件事一目了然，可对方听一遍还是没懂，你重新解释时是否感到吃力。" },
        { n: 5, k: "filler", en: "I dream most nights.", zh: "我几乎每晚都会做梦。", note: "回想一下夜里睡觉，你是否大多数时候醒来都记得自己做过梦。" },
        { n: 6, k: "forward", en: "I really enjoy caring for other people.", zh: "我真的很享受照顾别人。", note: "比如帮生病的朋友端水拿药、照看小孩，你对这类照料他人的事的感受。" },
        { n: 7, k: "filler", en: "I try to solve my own problems rather than discussing them with others.", zh: "我更愿意自己解决问题，而不是找人倾诉。", note: "遇到烦心事时，你是更想一个人琢磨清楚，还是更想找人聊聊。" },
        { n: 8, k: "reverse", en: "I find it hard to know what to do in a social situation.", zh: "在社交场合里，我常常不知道该怎么做才好。", note: "比如参加一个不太熟的聚会，该跟谁说话、说什么，你对这种情境的感受。" },
        { n: 9, k: "filler", en: "I am at my best first thing in the morning.", zh: "我在一天里状态最好的时候是清晨。", note: "想想你精力和头脑最清醒的时段，是不是集中在早上刚起来那会儿。" },
        { n: 10, k: "reverse", en: "People often tell me that I went too far in driving my point home in a discussion.", zh: "讨论时，别人常说我为了证明观点而做得太过了。", note: "比如争论一件事时，你坚持己见的方式，别人会不会觉得有点用力过猛。" },
        { n: 11, k: "reverse", en: "It doesn't bother me too much if I am late meeting a friend.", zh: "就算和朋友见面我迟到了，也不太会让我在意。", note: "比如约好的时间你晚到了，你对这件事放在心上的程度。" },
        { n: 12, k: "reverse", en: "Friendships and relationships are just too difficult, so I tend not to bother with them.", zh: "友谊和人际关系实在太麻烦了，所以我一般懒得去经营。", note: "维系朋友、处理各种关系需要花心思，你对投入这些精力的态度。" },
        { n: 13, k: "filler", en: "I would never break a law, no matter how minor.", zh: "不管多小的法律，我都绝不会去违反。", note: "比如闯红灯、乱穿马路这类小事，你对遵守或不遵守这类小规定的一般态度。" },
        { n: 14, k: "reverse", en: "I often find it difficult to judge if something is rude or polite.", zh: "我常常很难判断某件事到底是无礼还是有礼。", note: "比如别人说了句话或做了个举动，你是否容易拿不准那算失礼还是得体。" },
        { n: 15, k: "reverse", en: "In a conversation, I tend to focus on my own thoughts rather than on what my listener might be thinking.", zh: "聊天时，我往往更专注于自己的想法，而不是听我说话的人可能在想什么。", note: "和人对话时，你的注意力更多放在自己要表达的内容上，还是放在对方的反应和心思上。" },
        { n: 16, k: "filler", en: "I prefer practical jokes to verbal humour.", zh: "比起言语上的幽默，我更喜欢恶作剧式的玩笑。", note: "逗乐别人时，你更偏好动手搞的小把戏，还是靠俏皮话、双关这类语言幽默。" },
        { n: 17, k: "filler", en: "I live life for today rather than the future.", zh: "我更多是为今天而活，而不是为将来。", note: "你在做事和安排上，是更看重眼下当下，还是更常为长远打算。" },
        { n: 18, k: "reverse", en: "When I was a child, I enjoyed cutting up worms to see what would happen.", zh: "小时候，我喜欢把虫子切开看看会怎么样。", note: "回想童年，你对这类摆弄小动物、看它们会有什么反应的行为的经历。" },
        { n: 19, k: "forward", en: "I can pick up quickly if someone says one thing but means another.", zh: "如果有人嘴上说一套、实际另有所指，我能很快听出来。", note: "比如对方客气地说「没关系」，其实语气里藏着不满，这里问的是你对这种言外之意的体会。" },
        { n: 20, k: "filler", en: "I tend to have very strong opinions about morality.", zh: "我对道德问题往往有非常强烈的看法。", note: "面对是非对错的话题，你的立场是模糊随和，还是相当鲜明坚定。" },
        { n: 21, k: "reverse", en: "It is hard for me to see why some things upset people so much.", zh: "有些事让别人那么难过，我很难理解为什么。", note: "比如别人为一件在你看来不算什么的事伤心，你对这种情况下自己能否体会到对方感受的一般情况。" },
        { n: 22, k: "forward", en: "I find it easy to put myself in somebody else's shoes.", zh: "我很容易设身处地地站在别人的角度想。", note: "比如朋友遇到某种处境，去想象换作是自己会是什么感受，这里问的是你做这件事的一般情况。" },
        { n: 23, k: "filler", en: "I think that good manners are the most important thing a parent can teach their child.", zh: "我认为，良好的礼貌是父母能教给孩子的最重要的东西。", note: "在教养孩子这件事上，你把「懂礼貌」看得有多重。" },
        { n: 24, k: "filler", en: "I like to do things on the spur of the moment.", zh: "我喜欢一时兴起、说做就做。", note: "比如临时起意就出门、随手改变计划，你对这种不做铺垫、凭当下冲动行事的偏好。" },
        { n: 25, k: "forward", en: "I am good at predicting how someone will feel.", zh: "我很擅长预判别人会有什么样的感受。", note: "比如某件事发生后，去料到某人大概会高兴、生气还是失落，这里问的是你做这件事的一般情况。" },
        { n: 26, k: "forward", en: "I am quick to spot when someone in a group is feeling awkward or uncomfortable.", zh: "在一群人里，谁开始感到尴尬或不自在，我能很快察觉。", note: "聚会或开会时，有人突然变得局促不安，这里问的是你对这种气氛变化的一般感知情况。" },
        { n: 27, k: "reverse", en: "If I say something that someone else is offended by, I think that that's their problem, not mine.", zh: "如果我说的话让别人觉得被冒犯了，我会觉得那是他的问题，不是我的。", note: "当自己一句话让对方不舒服，你更倾向于认为责任在对方，还是在自己。" },
        { n: 28, k: "reverse", en: "If anyone asked me if I liked their haircut, I would reply truthfully, even if I didn't like it.", zh: "如果有人问我喜不喜欢他的新发型，就算我不喜欢，我也会照实说。", note: "面对「你觉得我这样好看吗」这类问题，你是照实讲，还是会顺着对方说点场面话。" },
        { n: 29, k: "reverse", en: "I can't always see why someone should have felt offended by a remark.", zh: "我不总能明白别人为什么会因为一句话就觉得被冒犯。", note: "比如你随口说了句话，对方却生气了，你对「那句话哪里得罪了人」的一般理解情况。" },
        { n: 30, k: "filler", en: "People often tell me that I am very unpredictable.", zh: "别人常说我很难捉摸。", note: "在别人眼里，你的言行是比较好预料，还是常常出人意料。" },
        { n: 31, k: "filler", en: "I enjoy being the centre of attention at any social gathering.", zh: "在任何社交聚会上，我都很享受成为焦点。", note: "聚会时被众人注意、成为话题中心，你对这种被关注状态的感受。" },
        { n: 32, k: "reverse", en: "Seeing people cry doesn't really upset me.", zh: "看到别人哭，其实并不太会让我难受。", note: "当身边有人落泪时，你自己内心被牵动、跟着难过的程度。" },
        { n: 33, k: "filler", en: "I enjoy having discussions about politics.", zh: "我喜欢和人讨论政治。", note: "聊到政治、时事这类话题时，你是乐在其中，还是提不起兴趣。" },
        { n: 34, k: "reverse", en: "I am very blunt, which some people take to be rudeness, even though this is unintentional.", zh: "我说话很直，有些人会当成没礼貌，其实我并没那个意思。", note: "你表达时的直白程度，以及别人是否会因此误以为你在故意冲撞。" },
        { n: 35, k: "forward", en: "I don't find social situations confusing.", zh: "社交场合并不会让我觉得摸不着头脑。", note: "面对各种人际往来的情境，你是感到清楚明白，还是常常一头雾水。" },
        { n: 36, k: "forward", en: "Other people tell me I am good at understanding how they are feeling and what they are thinking.", zh: "别人告诉我，我很擅长理解他们的感受和想法。", note: "在别人的评价里，你读懂他们心情和心思这方面的一般情况。" },
        { n: 37, k: "forward", en: "When I talk to people, I tend to talk about their experiences rather than my own.", zh: "和人聊天时，我往往聊的是对方的经历，而不是我自己的。", note: "对话中，话题更多围着对方的事转，还是更多落在你自己的事上。" },
        { n: 38, k: "forward", en: "It upsets me to see an animal in pain.", zh: "看到动物痛苦，我会觉得难受。", note: "比如看到一只受伤或挨饿的小动物，你内心被触动、感到难过的程度。" },
        { n: 39, k: "reverse", en: "I am able to make decisions without being influenced by people's feelings.", zh: "我能做决定，而不被别人的情绪左右。", note: "拿主意时，你在多大程度上会受到旁人感受和情绪的影响。" },
        { n: 40, k: "filler", en: "I can't relax until I have done everything I had planned to do that day.", zh: "要是当天计划的事没全做完，我就没法放松。", note: "给自己列了一天的待办，没做完时，你放不下心、无法休息的程度。" },
        { n: 41, k: "forward", en: "I can easily tell if someone else is interested or bored with what I am saying.", zh: "我能轻松看出别人对我讲的话是感兴趣还是听腻了。", note: "你说话时，从对方的神情反应里，去判断他是听得入神还是已经走神，这里问的是你做这件事的一般情况。" },
        { n: 42, k: "forward", en: "I get upset if I see people suffering on news programmes.", zh: "在新闻里看到有人受苦，我会觉得难过。", note: "看到新闻报道中他人遭遇不幸的画面时，你被牵动情绪的程度。" },
        { n: 43, k: "forward", en: "Friends usually talk to me about their problems as they say that I am very understanding.", zh: "朋友常来找我倾诉烦恼，因为他们说我很善解人意。", note: "当朋友有心事时，你是不是那个常被选中倾诉、被认为能体谅人的对象。" },
        { n: 44, k: "forward", en: "I can sense if I am intruding, even if the other person doesn't tell me.", zh: "就算对方没说，我也能感觉到自己是不是打扰到了。", note: "比如你到了某个场合，虽然没人明说，这里问的是你对自己此刻是否来得不巧的一般感受。" },
        { n: 45, k: "filler", en: "I often start new hobbies, but quickly become bored with them and move on to something else.", zh: "我常常开始一项新爱好，但很快就腻了，转去玩别的。", note: "回想你尝试新兴趣的经历，是能长久投入，还是热度过去就换下一个。" },
        { n: 46, k: "reverse", en: "People sometimes tell me that I have gone too far with teasing.", zh: "有人有时会说，我开玩笑逗人开过头了。", note: "你和别人打趣、开玩笑时的分寸，别人会不会觉得偶尔玩笑过了火。" },
        { n: 47, k: "filler", en: "I would be too nervous to go on a big rollercoaster.", zh: "坐大型过山车会让我太紧张，我不敢去。", note: "面对过山车这类刺激的游乐项目，你是跃跃欲试，还是紧张得想回避。" },
        { n: 48, k: "reverse", en: "Other people often say that I am insensitive, though I don't always see why.", zh: "别人常说我不够体贴，可我并不总明白为什么。", note: "当别人评价你的反应方式时，你对他们为何这么说的一般理解情况。" },
        { n: 49, k: "reverse", en: "If I see a stranger in a group, I think that it is up to them to make an effort to join in.", zh: "如果一群人里有个陌生人，我觉得该由他自己主动去融入。", note: "聚会上有个不认识的人站在一旁，你觉得主动打破僵局、拉他进来，是他的事还是大家的事。" },
        { n: 50, k: "reverse", en: "I usually stay emotionally detached when watching a film.", zh: "看电影时，我通常在情感上保持抽离。", note: "看电影时，你是容易入戏、跟着剧情起伏，还是能比较冷静地置身事外。" },
        { n: 51, k: "filler", en: "I like to be very organized in day-to-day life and often make lists of the chores I have to do.", zh: "我喜欢把日常生活安排得井井有条，还常把要做的杂事列成清单。", note: "过日子时，你是随性而为，还是习惯规划、把待办事项一条条记下来。" },
        { n: 52, k: "forward", en: "I can tune into how someone else feels rapidly and intuitively.", zh: "我能迅速而凭直觉地感应到别人的心情。", note: "和人接触时，你是否常常不用多想，一下子就能「感觉到」对方此刻的情绪。" },
        { n: 53, k: "filler", en: "I don't like to take risks.", zh: "我不喜欢冒险。", note: "面对有风险、结果不确定的选择时，你是偏向躲开还是愿意一试。" },
        { n: 54, k: "forward", en: "I can easily work out what another person might want to talk about.", zh: "我能轻松琢磨出对方可能想聊些什么。", note: "和人交谈时，去猜到对方感兴趣、想展开的话题，这里问的是你做这件事的一般情况。" },
        { n: 55, k: "forward", en: "I can tell if someone is masking their true emotion.", zh: "我能看出别人是不是在掩饰真实的情绪。", note: "比如有人表面上笑着说没事，去察觉他其实在强撑，这里问的是你对这种情况的一般体会。" },
        { n: 56, k: "filler", en: "Before making a decision, I always weigh up the pros and cons.", zh: "做决定之前，我总会权衡利弊。", note: "面临选择时，你是习惯把好处坏处一一掂量，还是更多凭当下感觉直接决定。" },
        { n: 57, k: "forward", en: "I don't consciously work out the rules of social situations.", zh: "我不会刻意去琢磨社交场合的规则。", note: "应对各种人际情境时，你是自然而然地就知道怎么做，还是会在心里有意识地推演该怎么应对。" },
        { n: 58, k: "forward", en: "I am good at predicting what someone will do.", zh: "我很擅长预测别人会怎么做。", note: "比如某种情况下，去料到某人接下来会作何反应、采取什么行动，这里问的是你做这件事的一般情况。" },
        { n: 59, k: "forward", en: "I tend to get emotionally involved with a friend's problems.", zh: "我往往会在情感上卷入朋友的烦恼里。", note: "朋友有难处时，你是能保持一定距离地帮忙，还是容易把他的情绪当成自己的、跟着揪心。" },
        { n: 60, k: "forward", en: "I can usually appreciate the other person's viewpoint, even if I don't agree with it.", zh: "即使我不同意，通常也能体谅对方的观点。", note: "和人意见相左时，你能否在不认同的同时，仍理解对方为什么会这么想。" }
      ]
    }
  }
};
