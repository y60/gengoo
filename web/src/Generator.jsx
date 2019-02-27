import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const kanjis = "一乙九七十人丁刀二入八又了力下干丸久及弓巾己口工乞才三山士子女小上丈刃寸夕千川大土亡凡万与引円王化火牙介刈牛凶斤区欠月犬元幻戸五互午公勾孔今支止氏尺手収升少冗心仁水井切双太丹中弔爪天斗屯内匂日反比匹不夫父仏分文片方乏木毛厄友予六圧以右永凹央加可瓦外且刊甘丘旧去巨玉句兄穴玄古功巧広甲号込左冊札皿仕史司四市矢示叱失写主囚汁出処召尻申世正生斥石仙占他打代台旦庁田奴冬凸丼尼白半氾犯皮必氷付布払丙平辺弁母包北本末未民矛目由幼用立令礼扱安衣芋印因宇羽汚仮回灰会各汗缶企伎危机気吉休吸朽臼共叫仰曲刑血件交光向后好江考行合再在旨死糸至字寺次耳自式芝守朱州舟充旬巡如匠色尽迅成西舌先全壮早争存多宅団地池竹仲虫兆伝吐灯当同弐肉任年肌伐帆汎妃百伏米忙朴毎名妄有羊吏両列劣老亜位囲医壱応何花我快戒改貝角完肝含岐希忌汽技却求究狂局均近吟串君形系芸迎決見言呉坑孝抗攻更克告谷困佐沙災材作伺志私似児社車寿秀住初助序床抄肖条状伸臣芯身辛図吹杉声赤折走即束足村汰妥対体択沢但男沖町沈低呈廷弟努投豆那尿妊忍把売伯麦抜伴判坂阪否批尾肘扶兵別返芳邦坊妨忘防没妙冶役余妖抑沃来乱卵利里良冷励戻呂労弄宛依委育雨泳英易延沿炎往押旺欧殴岡佳価果河苛画芽怪拐劾拡学岳官岸岩玩奇祈季宜泣居拒拠京享供協況金苦具空屈径茎券肩弦呼固股虎効幸拘肯刻国昆妻采刷刹参使刺始姉枝祉肢事侍治実舎者邪若取受呪周宗叔述所尚招承昇松沼垂炊枢制姓征性青斉昔析拙狙阻卒卓拓担知宙忠抽注長直坪定底抵邸泥的迭典店妬東到毒突届奈乳念波拝杯拍泊迫板版彼披肥非泌表苗府怖阜附侮武服沸物併並歩奉宝抱放法泡房肪牧奔妹枚枕抹味岬命明免茂盲門夜弥油拉林例炉和枠哀威為畏胃茨咽姻映栄疫怨屋卸音科架悔海界皆垣柿革括活冠巻看紀軌客逆虐急級糾峡挟狭軍係型契計建研県限孤弧故枯後侯厚恒洪皇紅荒郊香拷恨査砂砕削昨柵咲拶姿思指施持室狩首拾秋臭柔重祝俊春盾叙昭乗城浄拭食侵信津神甚帥是政星牲省窃宣専泉浅洗染前祖奏相荘草送促則俗耐待怠胎退単炭胆段茶昼柱挑勅珍追亭貞帝訂点度怒逃洞峠独栃南虹派背肺畑発卑飛眉美秒品訃負赴封風柄変便保胞某冒勃盆昧迷面約勇幽洋要律柳侶厘郎挨案員院唄畝浦益悦宴桜翁俺恩夏家荷華蚊害格核株釜陥既記起飢鬼帰宮挙恐恭胸脅訓郡恵桁倹兼剣拳軒原個庫娯悟候校耕航貢降高剛骨根唆差座挫宰栽剤財索殺桟蚕残師恣紙脂時疾射借酌弱殊珠酒修袖従准殉純書徐除宵将消症祥称笑辱唇娠振浸真針陣粋衰凄逝席脊隻扇栓租素倉捜挿桑造息捉速孫帯泰託値恥致畜逐秩衷酎捗朕通庭逓哲展徒途倒凍唐島桃討透党胴匿特悩納能破馬俳配倍梅剝班畔般疲秘被姫俵病浜敏浮粉紛陛勉哺捕俸倣峰砲剖紡埋脈眠娘冥耗紋容浴流留竜旅料倫涙烈恋連朗浪脇悪尉異移萎域逸淫陰液菓貨械崖涯殻郭掛喝渇乾勘患貫眼基寄規亀偽菊脚救球虚許魚強教郷菌惧偶掘啓掲渓経蛍健険現舷康控梗黄黒頃婚混痕紺彩採済祭斎細菜埼崎惨産斬視鹿執捨赦斜蛇釈寂授終羞習週渋宿淑粛術庶唱商渉章紹訟剰常情深紳進推酔崇据清盛惜戚責接設雪旋船措粗組巣掃曹曽爽窓側族率唾堆袋逮第脱探淡断窒著帳張彫眺釣頂鳥陳停偵笛添転都悼盗陶動堂得豚貪梨軟捻粘脳婆排敗培陪舶販票描猫貧瓶婦符部副閉偏崩訪望堀麻密務猛問野訳唯悠郵庸欲翌理陸略粒隆涼猟陵累握嵐偉椅飲運雲営詠越媛援奥温渦過賀絵開階街覚割葛寒喚堪換敢棺款間閑喜幾揮期棋貴欺喫給距御暁極勤琴筋遇隅敬景軽結圏堅検減湖雇喉慌港硬絞項詐最裁策酢傘散紫詞歯滋軸湿煮就衆集循順暑勝掌晶焼焦硝粧詔証象場畳植殖森診尋須遂随婿晴税絶善然疎訴創喪痩葬装測属尊堕惰替貸隊達棚短弾遅着貯朝貼超椎痛塚堤提程渡塔搭棟湯痘登答等筒統童道鈍廃媒買博斑飯晩番蛮悲扉費備筆評富普幅復雰塀遍補募報傍帽棒貿満無喩愉湧猶裕遊雄揚揺葉陽絡落痢硫量塁裂廊惑湾腕愛暗彙意違園煙猿遠鉛塩虞嫁暇禍靴雅塊楷解慨蓋該較隔楽滑褐勧寛幹感漢頑棄毀義詰嗅業僅禁愚窟群傾携継詣隙傑嫌献絹遣源誇鼓碁溝鉱傲債催塞歳載罪搾嗣試詩資飼慈辞嫉腫愁酬準署傷奨照詳蒸飾触寝慎新腎睡数裾勢聖誠跡摂節戦煎羨腺詮践禅塑僧想賊続損滞滝嘆暖痴稚置蓄腸跳賃艇溺鉄塡殿電塗働督頓農漠鉢搬煩頒微福腹墓蜂豊飽睦幕夢盟滅誉預溶腰裸雷酪裏慄虜鈴零廉賂路楼話賄維隠駅演寡歌箇概閣慣管関旗疑漁境銀駆熊語誤構綱酵豪穀酷獄魂際察雑算酸誌雌磁漆遮種需銃塾緒彰障精製誓静説箋銭漸遡層総遭像増憎遜駄態奪端綻嫡徴漬摘滴適稲銅徳読認寧髪罰閥碑鼻漂腐複聞蔑慕暮貌僕墨膜慢漫蜜銘鳴綿模網誘様瘍踊辣僚領緑瑠暦歴練漏慰遺影鋭謁閲縁横億稼課餓潰確潟歓監緩器畿輝儀戯窮緊勲慶憬稽劇撃潔権稿駒撮賛暫摯賜餌質趣熟潤遵諸憧衝賞縄嘱審震穂請潜線遷選槽踪蔵諾誰誕談鋳駐嘲潮澄調墜締敵徹撤踏導熱罵輩賠箱箸範盤罷膝標賓敷膚賦舞噴墳憤幣弊蔽餅編舗褒暴撲摩魅黙憂窯養履璃慮寮輪霊論"

class Generator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gengo:this.generate(),
            name:""
        }
        this.leak=this.leak.bind(this)
    }
    render() {
        const { classes } = this.props;
        const { gengo, name } = this.state;
        return (
            <div align="center">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            元号ジェネレータ！
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Paper className={classes.paper} elevation={1}>
                    <Typography variant="h1" align="center">
                        {gengo}
                    </Typography>
                </Paper>
                <Button variant="contained" size="large" color="primary" onClick={() => this.setState({gengo:this.generate()})} className={classes.button}>
                    生成する
                </Button>
                    <Grid container spacing={8} alignItems="flex-end" justify="center">
                        <Grid item>
                            <TextField
                                label="名前"
                                className={classes.textField}
                                value={name}
                                onChange={event=>this.setState({name:event.target.value})}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" size="small" color="primary" 
                                onClick={this.leak} className={classes.button}>
                                漏洩する
                            </Button>
                        </Grid>
                    </Grid>
            </div>
        );
    }
    generate(){
        const rand = Math.floor(Math.random() * kanjis.length * kanjis.length);
        const a = rand % kanjis.length;
        const b = (rand - a) / kanjis.length;
        return kanjis[b]+kanjis[a]
    }
    leak(){
        const { gengo, name } = this.state;
        console.log(gengo,name)
    }
}

const styles = theme => ({
    paper: {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      margin:theme.spacing.unit
    },
    button:{
        margin: theme.spacing.unit,
        align:"center",
    }
});

Generator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Generator);